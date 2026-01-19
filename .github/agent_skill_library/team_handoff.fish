# Fish function for team coordination and handoffs
#
# To install:
# 1. Copy to fish functions: cp team_handoff.fish ~/.config/fish/functions/team_handoff.fish
# 2. Or source directly: source team_handoff.fish

function team_handoff --description "Initiate a handoff between agents in the Convocation"
    set -l agents_dir ".github/agents"
    
    # Get available agents
    set -l available_agents (for f in $agents_dir/*.agent.md; basename $f .agent.md; end)
    
    if test (count $argv) -lt 2
        echo "🤝 Team Handoff Coordinator"
        echo ""
        echo "Usage: team_handoff <from_agent> <to_agent> [context]"
        echo ""
        echo "Available agents:"
        for agent in $available_agents
            echo "  - $agent"
        end
        echo ""
        echo "Examples:"
        echo "  team_handoff Cartographer DiScriptor 'Implement Epic #42'"
        echo "  team_handoff Typescripter Pythonomancer 'Coordinate API schema'"
        return 1
    end
    
    set -l from_agent $argv[1]
    set -l to_agent $argv[2]
    set -l context ""
    
    if test (count $argv) -ge 3
        set context $argv[3]
    end
    
    # Validate agents exist
    if not contains -- "$from_agent" $available_agents
        echo "❌ Error: Agent '$from_agent' not found." >&2
        return 1
    end
    
    if not contains -- "$to_agent" $available_agents
        echo "❌ Error: Agent '$to_agent' not found." >&2
        return 1
    end
    
    # Display handoff information
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🔄 HANDOFF INITIATED"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "From: $from_agent"
    echo "To:   $to_agent"
    if test -n "$context"
        echo "Context: $context"
    end
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    # Show target agent's description
    set -l agent_file "$agents_dir/$to_agent.agent.md"
    if test -f "$agent_file"
        echo "📋 $to_agent's Role:"
        grep -A 1 "^description:" "$agent_file" | head -2
        echo ""
    end
    
    echo "✅ Handoff documented. Activate $to_agent to continue."
end

# Tab completion for team_handoff
complete --command team_handoff --no-files \
    --arguments "(for f in .github/agents/*.agent.md; basename $f .agent.md; end)"
