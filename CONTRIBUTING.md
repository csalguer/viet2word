# Contributing to Viet2Word

Thank you for your interest in contributing to **Viet2Word**! This document provides guidelines and workflows for contributing.

## 🏛️ The Convocation

This project is managed by the **AGÊNZIA**, a team of specialized agents. When contributing, you may interact with:

| Agent | Role | When to Consult |
|-------|------|-----------------|
| **Cartographer** | Project Planning | Epics, milestones, coordination |
| **Di Scriptor** | Implementation & Automation | Code changes, CI/CD, scripts |
| **Barkeep** | QA & Release | Testing, validation, promotion |
| **Themeister** | UI/UX Design | Styling, components, layouts |
| **Typescripter** | Type Safety | TypeScript, Zod schemas |
| **Pythonomancer** | Python & Pydantic | Data scripts, CLI tools |
| **Storied Scribe** | Storybook | Component documentation |

## 🐟 Development Setup

### Prerequisites

- Node.js 20+
- pnpm 9+
- Python 3.10+ (for data scripts)

### Installation

```fish
# 🐟 Fish
pnpm install
pnpm dev
```

```bash
# 📜 Bash
pnpm install
pnpm dev
```

### Storybook

```fish
pnpm storybook
```

## 📝 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new vocabulary card animation
fix: correct phonetic display in RTL mode
docs: update README with new routes
test: add visual tests for VocabCard
style: update palette colors for dark mode
refactor: extract card animations to hooks
```

## 🧪 Testing

```fish
# Unit tests
pnpm test

# Storybook visual tests
pnpm storybook:build
pnpm test:storybook

# Type check
pnpm tsc --noEmit

# Lint
pnpm lint
```

## 🔄 Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make changes following our patterns
4. Add Storybook stories for new components
5. Run tests: `pnpm test`
6. Submit PR with clear description

## 📋 Code Patterns

### Component Structure

```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Unit tests (optional)
├── ComponentName.module.css   # CSS modules (if needed)
├── types.ts                   # TypeScript interfaces
└── index.ts                   # Barrel export
```

### TypeScript Standards

- Strict mode enabled
- No `any` types
- `ReactElement` return types for components
- Interfaces for props (`*Props` suffix)

### Styling

- Chakra UI components
- Custom `palette` for colors
- Framer Motion for animations

## 🎨 Design Handoff

Designers can use the prompts in `.github/prompts/` to communicate with agents:

- `design_handoff_prompt.md` - For UI specifications
- `component_request_prompt.md` - For new components

## 📚 Resources

- [Team Delegation Guide](.github/instructions/team_delegation_guide.md)
- [Agent Skills](.github/skills/SKILLS.md)
- [Storybook Skill](.github/skills/storybook.skill.md)
