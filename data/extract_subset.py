import json
import re
import os

# Regex for CJK Unified Ideographs and Extensions
cjk_pattern = re.compile(r"[\u4e00-\u9fff\u3400-\u4dbf\U00020000-\U0002a6df]")


def is_chinese_character_entry(entry):
    # Check if the word itself contains CJK characters
    if cjk_pattern.search(entry.get("word", "")):
        return True
    # Check if pos indicates a character (letters, symbols, etc.)
    if entry.get("pos") in ["character", "symbol"]:
        return True
    return False


def extract_subset(input_file, output_std, output_cn):
    keys_to_keep = [
        "word",
        "pos",
        "senses",
        "sounds",
        "forms",
        "etymology_text",
        "head_templates",
    ]

    count_std = 0
    count_cn = 0

    with open(input_file, "r", encoding="utf-8") as fin, open(
        output_std, "w", encoding="utf-8"
    ) as fstd, open(output_cn, "w", encoding="utf-8") as fcn:

        for line in fin:
            if not line.strip():
                continue

            try:
                entry = json.loads(line)
            except json.JSONDecodeError:
                continue

            if is_chinese_character_entry(entry):
                # Write full entry for Chinese/Nom/Symbols to separate file
                fcn.write(json.dumps(entry, ensure_ascii=False) + "\n")
                count_cn += 1
            else:
                # Create subset for standard dictionary
                new_entry = {k: entry.get(k) for k in keys_to_keep if k in entry}

                # Ensure essential keys exist
                if "word" not in new_entry:
                    continue

                fstd.write(json.dumps(new_entry, ensure_ascii=False) + "\n")
                count_std += 1

    print(f"Extraction Complete.")
    print(f"Standard Entries: {count_std} (Saved to {output_std})")
    print(f"Chinese/Nôm/Symbol Entries: {count_cn} (Saved to {output_cn})")


if __name__ == "__main__":
    input_path = "kaikki.org-dictionary-Vietnamese.jsonl"
    output_std_path = "standard_dictionary.jsonl"
    output_cn_path = "chinese_nom_entries.jsonl"

    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
    else:
        extract_subset(input_path, output_std_path, output_cn_path)
