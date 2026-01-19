# Agent Skills

This directory contains modular skill definitions that provide specific domain expertise to the agents.

## Skills List

### Core Skills

- **[Fish Shell](fish-shell.skill.md)**: Mastery of the Fish shell syntax and idioms.
- **[React Development](react.skill.md)**: Rules for React 19, Vite, and Hooks.
- **[Implementation](implementation.skill.md)**: Full-stack code execution and integration.
- **[Testing & QA](testing-qa.skill.md)**: Quality assurance and test strategies.
- **[Docker](docker.skill.md)**: Best practices for containerization.

### Language Master Skills

- **[TypeScript & Java](typescript-java.skill.md)**: Type system mastery, Zod, strict configurations.
- **[Python & Pydantic](python-pydantic.skill.md)**: Pydantic v2, FastAPI, pytest, and serpentine arts.
- **[Python Data Analysis](python-data.skill.md)**: Guidelines for Pandas and Notebooks.

### Coordination Skills

- **[Agile Planning](agile-planning.skill.md)**: Epic coordination, sprint planning, velocity tracking.

### Documentation Skills

- **[Storybook](storybook.skill.md)**: Component documentation, visual testing, interactive stories.
- **[Documentation Mastery](documentation-mastery.skill.md)**: Markdown, README templates, ADRs.

### Research Skills

- **[Research Web](research-web.skill.md)**: Web fetching, GitHub raw URLs, research workflows.
- **[Codebase Analysis](codebase-analysis.skill.md)**: Search strategies, pattern detection, code archaeology.
- **[Architecture Design](architecture-design.skill.md)**: System design, Mermaid diagrams, planning templates.
- **[Dependency Security](dependency-security.skill.md)**: Package analysis, CVE checking, license compliance.

## Usage

Agents can reference these skills in their system prompts or context to gain specific capabilities.

## Skill Assignment Matrix

| Agent          | Primary Skills                                                |
| :------------- | :------------------------------------------------------------ |
| Di Scriptor    | Fish Shell, Docker, React, Implementation                     |
| Cartographer   | Agile Planning, Research Web, Codebase Analysis               |
| Tactician      | Architecture Design, Research Web, Codebase Analysis          |
| Typescripter   | TypeScript & Java                                             |
| Pythonomancer  | Python & Pydantic, Python Data                                |
| Barkeep        | Testing & QA                                                  |
| Themeister     | React                                                         |
| Datascapist    | Python Data                                                   |
| StoriedScribe  | Storybook, React, Research Web                                |
| Archivist      | Documentation Mastery, Research Web, Codebase Analysis        |
| Sourcerer      | Dependency Security, Research Web                             |
