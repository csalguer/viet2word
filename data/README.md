# Data Processing Documentation

This directory contains scripts and data files for processing the Vietnamese dictionary dataset.

## Source Data
- **`kaikki.org-dictionary-Vietnamese.jsonl`**: The raw Wiktionary dump for Vietnamese.

## Scripts

### 1. `schema_infer.py`
Analyzes the JSONL file to infer a common schema across all entries. Useful for understanding the structure of the data.

### 2. `analyze_subset.py`
Performs a frequency analysis of properties in the dataset. It also helps identify the distribution of standard words vs. Chinese/Nôm characters.

### 3. `extract_subset.py`
The main processing script. It filters the raw dataset and splits it into two files:
- **Standard Dictionary**: Entries representing standard Vietnamese words.
- **Chinese/Nôm Entries**: Entries representing Han/Nom characters or symbols.

**Usage:**
```bash
python3 extract_subset.py
```

## Output Files

### `standard_dictionary.jsonl`
Contains the subset of standard Vietnamese words.
- **Schema**: `word`, `pos`, `senses`, `sounds`, `forms`, `etymology_text`, `head_templates`.
- **Excluded**: Complex CJK entries (moved to the other file).

### `chinese_nom_entries.jsonl`
Contains entries that are primarily Chinese characters, Nôm characters, or symbols.
- Retains the full original schema for future analysis.
