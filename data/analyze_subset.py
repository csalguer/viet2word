import json
import re
import sys

# Regex for CJK Unified Ideographs and Extensions (covers most Han/Nom characters)
# Using \U for characters outside BMP (Extension B is common for Nom)
cjk_pattern = re.compile(r"[\u4e00-\u9fff\u3400-\u4dbf\U00020000-\U0002a6df]')


def is_chinese_character_entry(entry):
    # Check if the word itself contains CJK characters
    if cjk_pattern.search(entry.get("word", "")):
        return True
    # Check if pos indicates a character
    if entry.get("pos") in ["character", "symbol"]:
        return True
    return False


def analyze_file(filepath):
    standard_entries = []
    chinese_entries = []

    # Counters for properties in standard entries
    prop_counts = {}
    total_standard = 0

    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            try:
                data = json.loads(line)

                if is_chinese_character_entry(data):
                    if len(chinese_entries) < 5:
                        chinese_entries.append(data)
                else:
                    total_standard += 1
                    if len(standard_entries) < 5:
                        standard_entries.append(data)

                    # Count top-level keys
                    for k in data.keys():
                        prop_counts[k] = prop_counts.get(k, 0) + 1

            except json.JSONDecodeError:
                continue

    print(f"Total Standard Entries: {total_standard}")
    print("\nProperty Frequency in Standard Entries:")
    sorted_props = sorted(prop_counts.items(), key=lambda x: x[1], reverse=True)
    for k, v in sorted_props:
        print(f"  {k}: {v} ({v/total_standard*100:.1f}%)")

    print("\n--- Sample Standard Entry (Subset) ---")
    if standard_entries:
        sample = standard_entries[0]
        # Filter out synonyms/antonyms for display
        filtered = {
            k: v for k, v in sample.items() if k not in ["synonyms", "antonyms"]
        }
        print(json.dumps(filtered, indent=2, ensure_ascii=False))

    print("\n--- Sample Chinese/Nôm Entry ---")
    if chinese_entries:
        print(json.dumps(chinese_entries[0], indent=2, ensure_ascii=False))
    else:
        print("No Chinese/Nôm entries found.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_subset.py <jsonl_file>")
        sys.exit(1)
    analyze_file(sys.argv[1])
