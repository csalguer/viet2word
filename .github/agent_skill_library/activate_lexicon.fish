# Fish function to activate the Terra Lexicon Style Guide agent.
#
# To install, move this file to your fish functions directory:
# mv agent_skill_library/activate_lexicon.fish ~/.config/fish/functions/activate_lexicon.fish

function activate_lexicon --description "Activates the Terra Lexicon Style Guide agent"
    # Paths are relative to the project root directory
    set script_path "agent_skill_library/activate_agent.sh"
    set agent_file "agent_skill_library/terra-lexicon-style-guide.agent.md"

    # Ensure the activation script exists
    if not test -f "$script_path"
        echo "Error: Activation script not found at '$script_path'"
        return 1
    end

    # Make the script executable if it isn't already
    if not test -x "$script_path"
        chmod +x "$script_path"
        echo "Made '$script_path' executable."
    end

    # Run the activation script with the correct agent file
    ./"$script_path" "$agent_file"
end
