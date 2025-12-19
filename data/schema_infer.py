import json
import sys


def get_type(value):
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, int):
        return "integer"
    if isinstance(value, float):
        return "number"
    if isinstance(value, str):
        return "string"
    if isinstance(value, list):
        return "array"
    if isinstance(value, dict):
        return "object"
    return "unknown"


def infer_schema(data):
    schema_type = get_type(data)
    if schema_type == "object":
        properties = {}
        for k, v in data.items():
            properties[k] = infer_schema(v)
        return {"type": "object", "properties": properties}
    elif schema_type == "array":
        items = []
        for item in data:
            items.append(infer_schema(item))
        return {"type": "array", "items": items}
    else:
        return {"type": schema_type}


def are_compatible(s1, s2):
    t1 = s1.get("type")
    t2 = s2.get("type")

    if t1 == "null" or t2 == "null":
        return True

    if t1 != t2:
        return False

    if t1 == "object":
        p1 = s1.get("properties", {})
        p2 = s2.get("properties", {})
        common_keys = set(p1.keys()) & set(p2.keys())
        for k in common_keys:
            if not are_compatible(p1[k], p2[k]):
                return False
        return True

    # For arrays, we'll be lenient and say they are compatible if they are both arrays
    # We will handle merging their items later
    if t1 == "array":
        return True

    return True


def merge(s1, s2):
    t1 = s1.get("type")
    t2 = s2.get("type")

    if t1 == "null":
        return s2
    if t2 == "null":
        return s1

    if t1 == "object":
        p1 = s1.get("properties", {})
        p2 = s2.get("properties", {})
        all_keys = set(p1.keys()) | set(p2.keys())
        new_props = {}
        for k in all_keys:
            v1 = p1.get(k)
            v2 = p2.get(k)
            if v1 and v2:
                if are_compatible(v1, v2):
                    new_props[k] = merge(v1, v2)
                else:
                    # This branch shouldn't be reached if are_compatible was called before merge
                    # But as a fallback, create a union
                    new_props[k] = {"anyOf": [v1, v2]}
            elif v1:
                new_props[k] = v1
            else:
                new_props[k] = v2
        return {"type": "object", "properties": new_props}

    elif t1 == "array":
        items1 = s1.get("items", [])
        items2 = s2.get("items", [])
        if isinstance(items1, dict):
            items1 = [items1]
        if isinstance(items2, dict):
            items2 = [items2]

        all_items = items1 + items2
        merged_items = []

        # Iteratively merge compatible items in the array
        while all_items:
            current = all_items.pop(0)
            merged_into_existing = False
            for i, existing in enumerate(merged_items):
                if are_compatible(current, existing):
                    merged_items[i] = merge(current, existing)
                    merged_into_existing = True
                    break
            if not merged_into_existing:
                merged_items.append(current)

        if len(merged_items) == 1:
            return {"type": "array", "items": merged_items[0]}
        else:
            return {"type": "array", "items": merged_items}

    return s1


def process_file(filepath):
    schemas = []

    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            try:
                data = json.loads(line)
                current_schema = infer_schema(data)

                merged = False
                for i, existing in enumerate(schemas):
                    if are_compatible(current_schema, existing):
                        schemas[i] = merge(current_schema, existing)
                        merged = True
                        break

                if not merged:
                    schemas.append(current_schema)

            except json.JSONDecodeError:
                continue

    print(json.dumps(schemas, indent=2))


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python schema_infer.py <jsonl_file>")
        sys.exit(1)
    process_file(sys.argv[1])
