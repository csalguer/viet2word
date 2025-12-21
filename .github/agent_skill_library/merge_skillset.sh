#!/bin/bash

# merge_skillset.sh - Merge an agent skillset into a project.

set -e

# --- Configuration ---
SKILLSET_LIBRARY_DIR="$(dirname "$0")/skillsets"
DEFAULT_TARGET_DIR="."
MCP_FILENAME="mcp.json"
INSTRUCTIONS_DIR="instructions"
PROMPTS_DIR="prompts"

# --- Functions ---

function show_usage() {
    echo "Usage: $0 [OPTIONS] <SKILLSET_NAME>"
    echo "Merges a pre-defined agent skillset into your project."
    echo ""
    echo "Options:"
    echo "  -t, --target <DIR>  Specify the target project directory (default: current directory)."
    echo "  -l, --list          List all available skillsets."
    echo "  -h, --help          Show this help message."
    echo ""
    echo "Example:"
    echo "  $0 frontend_developer"
    echo "  $0 backend_developer --target ./my-agent-project"
}

function list_skillsets() {
    echo "Available skillsets:"
    for d in "$SKILLSET_LIBRARY_DIR"/* ; do
        if [ -d "$d" ]; then
            echo "  - $(basename "$d")"
        fi
    done
}

# --- Argument Parsing ---

TARGET_DIR="$DEFAULT_TARGET_DIR"
SKILLSET_NAME=""

while [[ $# -gt 0 ]]; do
    key="$1"
    case $key in
        -h|--help)
            show_usage
            exit 0
            ;;
        -l|--list)
            list_skillsets
            exit 0
            ;;
        -t|--target)
            TARGET_DIR="$2"
            shift 2
            ;;
        *)
            if [ -z "$SKILLSET_NAME" ]; then
                SKILLSET_NAME="$1"
                shift
            else
                echo "Error: Unknown option or multiple skillsets provided: $1" >&2
                show_usage
                exit 1
            fi
            ;;
    esac
done

if [ -z "$SKILLSET_NAME" ]; then
    echo "Error: Skillset name is required." >&2
    show_usage
    exit 1
fi

# --- Main Logic ---

SOURCE_SKILLSET_DIR="$SKILLSET_LIBRARY_DIR/$SKILLSET_NAME"

# 1. Validate skillset existence
if [ ! -d "$SOURCE_SKILLSET_DIR" ]; then
    echo "Error: Skillset '$SKILLSET_NAME' not found." >&2
    list_skillsets
    exit 1
fi

# 2. Create target directories if they don't exist
TARGET_MCP_DIR="$TARGET_DIR/.aitk"
TARGET_INSTRUCTIONS_DIR="$TARGET_DIR/instructions"
TARGET_PROMPTS_DIR="$TARGET_DIR/prompts/system"

mkdir -p "$TARGET_MCP_DIR"
mkdir -p "$TARGET_INSTRUCTIONS_DIR"
mkdir -p "$TARGET_PROMPTS_DIR"

# 3. Copy MCP file
SOURCE_MCP="$SOURCE_SKILLSET_DIR/$MCP_FILENAME"
if [ -f "$SOURCE_MCP" ]; then
    cp "$SOURCE_MCP" "$TARGET_MCP_DIR/mcp.json"
    echo "✅ Copied MCP to $TARGET_MCP_DIR/mcp.json"
else
    echo "Warning: No '$MCP_FILENAME' found for skillset '$SKILLSET_NAME'."
fi

# 4. Copy instruction files
SOURCE_INSTRUCTIONS_DIR="$SOURCE_SKILLSET_DIR/$INSTRUCTIONS_DIR"
if [ -d "$SOURCE_INSTRUCTIONS_DIR" ]; then
    cp -r "$SOURCE_INSTRUCTIONS_DIR"/* "$TARGET_INSTRUCTIONS_DIR/"
    echo "✅ Copied instructions to $TARGET_INSTRUCTIONS_DIR"
fi

# 5. Copy prompt files
SOURCE_PROMPTS_DIR="$SOURCE_SKILLSET_DIR/$PROMPTS_DIR"
if [ -d "$SOURCE_PROMPTS_DIR" ]; then
    cp -r "$SOURCE_PROMPTS_DIR"/* "$TARGET_PROMPTS_DIR/"
    echo "✅ Copied prompts to $TARGET_PROMPTS_DIR"
fi

echo ""
echo "Skillset '$SKILLSET_NAME' has been successfully merged into '$TARGET_DIR'."
echo "Make sure to review the copied files and adjust them to your project's needs."

exit 0
