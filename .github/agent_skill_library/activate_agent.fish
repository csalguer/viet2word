# Fish function to activate a specified agent from the skill library.
#
# To install:
# 1. Remove your old function: rm ~/.config/fish/functions/activate_lexicon.fish
# 2. Move this file: mv agent_skill_library/activate_agent.fish ~/.config/fish/functions/activate_agent.fish

function activate_agent --description "Activates a specified agent from the skill library"
    # Find available agents by their file basenames
    set available_agents (for f in agent_skill_library/*.agent.md; basename $f .agent.md; end)

    # If no agent name is provided, list available agents and return.
    if test (count $argv) -eq 0
        echo "Usage: activate_agent <agent_name>"
        echo ""
        echo "Available agents:"
        for agent in $available_agents
            echo "  - $agent"
        end
        return 1
    end

    set agent_name $argv[1]
    set agent_file "agent_skill_library/$agent_name.agent.md"

    # Check if the chosen agent exists
    if not contains -- "$agent_name" $available_agents
        echo "Error: Agent '$agent_name' not found." >&2
        echo "Please choose from one of the available agents."
        return 1
    end

    set script_path "agent_skill_library/activate_agent.sh"

    # Make the activation script executable if it isn't already
    if not test -x "$script_path"
        chmod +x "$script_path"
        echo "Made '$script_path' executable."
    end

    # Run the activation script with the chosen agent file
    ./"$script_path" "$agent_file"
end

# Register completions for the activate_agent function.
# This will provide tab-completion for agent names.
complete \
    --command activate_agent \
    --no-files \
    --arguments "(for f in agent_skill_library/*.agent.md; basename $f .agent.md; end)"
