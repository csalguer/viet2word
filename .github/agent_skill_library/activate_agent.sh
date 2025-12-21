#!/bin/bash
# activate_agent.sh - A simple script to parse and "activate" an agent from a .agent.md file.

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <path_to_agent_file.agent.md>"
    exit 1
fi

AGENT_FILE="$1"

if [ ! -f "$AGENT_FILE" ]; then
    echo "Error: Agent file not found at '$AGENT_FILE'"
    exit 1
fi

# Use awk to extract the content of the system prompt section.
# The section number might vary, so we look for "System Prompt" heading.
SYSTEM_PROMPT=$(awk '/^#+ .*System Prompt/{flag=1; next} /^(---|\#\# )/{flag=0} flag' "$AGENT_FILE")

AGENT_NAME=$(basename "$AGENT_FILE" .agent.md)

echo "🚀 Activating agent: $AGENT_NAME 🚀"
echo ""
echo "------------------- AGENT SYSTEM PROMPT -------------------"
echo "$SYSTEM_PROMPT"
echo "-----------------------------------------------------------"
echo ""
echo "Agent is now 'equipped and ready to go!'"
echo "You can now use the prompt above to guide an AI model."
