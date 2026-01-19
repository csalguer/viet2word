# Testing & QA Skill

## Description

Expertise in quality assurance, test strategy, and standards enforcement.

## Instructions

### Test Types

- **Unit Tests**: Vitest for isolated component/function testing.
- **Integration Tests**: API route and service integration.
- **E2E Tests**: Playwright for full user journey validation.

### Code Review

- **Linting**: ESLint with project configuration.
- **Type Safety**: TypeScript strict mode compliance.
- **Best Practices**: Follow instruction files in `.github/instructions/`.

### Review Checklist

1. Does the code match the design/plan?
2. Are there adequate tests?
3. Are accessibility standards met (WCAG)?
4. Is the code performant?

### Standard Commands

```fish
# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Lint check
pnpm lint
```

## Related Agents

- **The Chorus**: Primary holder of QA responsibilities.
- **Cursebreaker**: Debug failing tests.
