# Fish function for sprint/epic planning with the Cartographer
#
# To install:
# 1. Copy to fish functions: cp epic_plan.fish ~/.config/fish/functions/epic_plan.fish
# 2. Or source directly: source epic_plan.fish

function epic_plan --description "Create or update an epic plan with the Cartographer"
    set -l epics_dir ".github/epics"
    
    # Parse arguments
    if test (count $argv) -eq 0
        echo "🗺️  Epic Planning Assistant (Cartographer's Domain)"
        echo ""
        echo "Usage:"
        echo "  epic_plan new <name>        Create a new epic"
        echo "  epic_plan list              List all epics"
        echo "  epic_plan status <name>     Show epic status"
        echo "  epic_plan assign <name> <agent>  Assign agent to epic"
        echo ""
        return 0
    end
    
    set -l command $argv[1]
    
    switch $command
        case "new"
            if test (count $argv) -lt 2
                echo "❌ Usage: epic_plan new <epic_name>"
                return 1
            end
            
            set -l epic_name $argv[2]
            set -l epic_file "$epics_dir/$epic_name.epic.md"
            
            # Create epics directory if it doesn't exist
            mkdir -p "$epics_dir"
            
            # Create epic template
            echo "# Epic: $epic_name

## 🗺️ Overview

**Status**: 🟡 Planning
**Created**: "(date +%Y-%m-%d)"
**Coordinator**: Cartographer

## Vision

[Describe what we're building and why]

## Success Metrics

- [ ] Metric 1: Target value
- [ ] Metric 2: Target value

## Milestones

| Milestone | ETA | Status | Owner |
|-----------|-----|--------|-------|
| MVP | Week 2 | ⬜ Not Started | TBD |
| Beta | Week 4 | ⬜ Not Started | TBD |
| GA | Week 6 | ⬜ Not Started | TBD |

## Team Assignment

| Agent | Role | Allocation |
|-------|------|------------|
| Di Scriptor | Implementation | TBD |
| | | |

## Dependencies

| Dependency | Owner | Status | Notes |
|------------|-------|--------|-------|
| | | | |

## Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| | | | |

## Progress Log

- "(date +%Y-%m-%d)": Epic created by Cartographer
" > "$epic_file"
            
            echo "✅ Epic '$epic_name' created at $epic_file"
            echo "📝 Edit the file to fill in details"
            
        case "list"
            if not test -d "$epics_dir"
                echo "📭 No epics directory found. Create one with: epic_plan new <name>"
                return 0
            end
            
            echo "📋 Active Epics:"
            echo "────────────────"
            for epic in $epics_dir/*.epic.md
                set -l epic_name (basename $epic .epic.md)
                set -l status (grep "^\*\*Status\*\*:" $epic | head -1 | sed 's/.*: //')
                echo "  • $epic_name [$status]"
            end
            
        case "status"
            if test (count $argv) -lt 2
                echo "❌ Usage: epic_plan status <epic_name>"
                return 1
            end
            
            set -l epic_name $argv[2]
            set -l epic_file "$epics_dir/$epic_name.epic.md"
            
            if not test -f "$epic_file"
                echo "❌ Epic '$epic_name' not found"
                return 1
            end
            
            echo ""
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo "📊 EPIC STATUS: $epic_name"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            cat "$epic_file"
            
        case "assign"
            if test (count $argv) -lt 3
                echo "❌ Usage: epic_plan assign <epic_name> <agent>"
                return 1
            end
            
            set -l epic_name $argv[2]
            set -l agent_name $argv[3]
            
            echo "📝 Assignment noted: $agent_name → $epic_name"
            echo "   Edit $epics_dir/$epic_name.epic.md to update team table"
            
        case "*"
            echo "❌ Unknown command: $command"
            echo "   Run 'epic_plan' for usage"
            return 1
    end
end

# Tab completion for epic_plan
complete --command epic_plan --no-files \
    --condition "__fish_is_first_token" \
    --arguments "new list status assign"
