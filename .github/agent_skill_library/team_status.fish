# Fish function to display team status and agent availability
#
# To install:
# 1. Copy to fish functions: cp team_status.fish ~/.config/fish/functions/team_status.fish
# 2. Or source directly: source team_status.fish

function team_status --description "Display status of the Convocation and available agents"
    set -l agents_dir ".github/agents"
    set -l skills_dir ".github/skills"
    set -l workflows_dir ".github/workflows"
    
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                   🏛️  THE CONVOCATION                        ║"
    echo "║               The Resonants Team Status                       ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    
    # Primary Agents
    echo "📌 PRIMARY AGENTS"
    echo "─────────────────"
    set -l primary "DiScriptor" "Barkeep" "Themeister" "Datascapist" "Chorus" "Archivist"
    for agent in $primary
        if test -f "$agents_dir/$agent.agent.md"
            echo "  ✅ $agent"
        else
            echo "  ⬜ $agent (not configured)"
        end
    end
    echo ""
    
    # Navigation Corps
    echo "🗺️  NAVIGATION CORPS"
    echo "────────────────────"
    if test -f "$agents_dir/Cartographer.agent.md"
        echo "  ✅ Cartographer - Epic Coordination & Agile"
    else
        echo "  ⬜ Cartographer (not configured)"
    end
    echo ""
    
    # Language Masters
    echo "📐 LANGUAGE MASTERS"
    echo "───────────────────"
    if test -f "$agents_dir/Typescripter.agent.md"
        echo "  ✅ Typescripter - TypeScript/Java & Types"
    else
        echo "  ⬜ Typescripter (not configured)"
    end
    if test -f "$agents_dir/Pythonomancer.agent.md"
        echo "  ✅ Pythonomancer - Python & Pydantic"
    else
        echo "  ⬜ Pythonomancer (not configured)"
    end
    echo ""
    
    # Specialists
    echo "🔧 SPECIALISTS"
    echo "──────────────"
    set -l specialists "Tactician" "Cursebreaker" "StoriedScribe" "Sourcerer"
    for agent in $specialists
        if test -f "$agents_dir/$agent.agent.md"
            echo "  ✅ $agent"
        else
            echo "  ⬜ $agent (not configured)"
        end
    end
    echo ""
    
    # Skills inventory
    echo "📚 SKILLS INVENTORY"
    echo "───────────────────"
    set -l skill_count (count $skills_dir/*.skill.md 2>/dev/null; or echo 0)
    echo "  $skill_count skills available"
    for skill in $skills_dir/*.skill.md
        set -l skill_name (basename $skill .skill.md)
        echo "    • $skill_name"
    end
    echo ""
    
    # Workflows
    if test -d "$workflows_dir"
        echo "⚡ CI/CD WORKFLOWS"
        echo "──────────────────"
        for workflow in $workflows_dir/*.yml
            set -l workflow_name (basename $workflow .yml)
            echo "    • $workflow_name"
        end
        echo ""
    end
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Use 'activate_agent <name>' to activate an agent"
    echo "Use 'team_handoff <from> <to>' to initiate a handoff"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
end
