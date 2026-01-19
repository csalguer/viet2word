# Helper Prompts

This directory contains system prompts, persona definitions, and workflow templates that frame the agent's behavior.

## Agent Prompts

- **[Di Scriptor](di_scriptor_prompt.md)**: Primary Implementer & Automation Scribe.

## Design & Development Workflow Prompts

- **[Design Handoff](design_handoff_prompt.md)**: Template for designers to hand off specs to developers.
- **[Component Request](component_request_prompt.md)**: Template for requesting new component development.

## Research & Planning Prompts

- **[Research Request](research_request_prompt.md)**: Template for requesting deep research from agents.
- **[Epic Planning](epic_planning_prompt.md)**: Template for Cartographer to plan multi-sprint epics.
- **[Architecture Review](architecture_review_prompt.md)**: Template for Tactician architecture analysis.
- **[Library Evaluation](library_evaluation_prompt.md)**: Template for Sourcerer dependency evaluation.
- **[Storybook Story Request](storybook_story_request_prompt.md)**: Template for StoriedScribe story creation.

## Legacy Prompts

- **[Generalist](generalist_prompt.md)**: The baseline persona.
- **[Frontend Developer](frontend_developer_prompt.md)**: React/UI focus.
- **[Backend Developer](backend_developer_prompt.md)**: Python/API focus.
- **[DevOps Specialist](devops_specialist_prompt.md)**: Infrastructure and Shell focus.
- **[Quality Assurance](quality_assurance_prompt.md)**: Testing and Standards focus.

## Usage

These prompts are used to seed the context of the specific agents defined in `../agents/`.

### Design Workflow

1. Designer fills out `design_handoff_prompt.md` template
2. Assign to **Themeister** for implementation
3. **StoriedScribe** creates Storybook stories
4. **Barkeep** validates visual accuracy

### Research Workflow

1. User fills out `research_request_prompt.md` template
2. Route to appropriate agent based on domain:
   - Architecture → **Tactician** + `architecture_review_prompt.md`
   - Dependencies → **Sourcerer** + `library_evaluation_prompt.md`
   - Epics → **Cartographer** + `epic_planning_prompt.md`
   - Components → **StoriedScribe** + `storybook_story_request_prompt.md`

### Planning Workflow

1. **Cartographer** creates epic plan using `epic_planning_prompt.md`
2. **Tactician** breaks down architecture using `architecture_review_prompt.md`
3. Tasks assigned to appropriate implementing agents
4. **Barkeep** validates before release
