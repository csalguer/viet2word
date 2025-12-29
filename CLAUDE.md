# CLAUDE Summary

## Contributions
- Clone the repo, remove the stale `.git`, install dependencies, and run `pnpm run setup` (README) so Husky/Commitizen/Commitlint keep every commit aligned with the Conventional Commits workflow.
- Use `.github/instructions/INSTRUCTIONS.md` to pick the right guide for API design, bug reporting, CI/CD, frontend testing, etc., and apply the clarity/modularity/testing/security/version-control principles from `.github/instructions/general_best_practices.md` before sending a change for review.

## Architecture
- The app is a Vite + React + TypeScript starter that layers in TanStack Router/Query/Table, Zustand, React Hook Form, Zod, Nivo, Storybook, and the usual React tooling (README). That stack keeps the UI fast, type-safe, and testable while supporting modern data workflows.
- Containerization guidance in `.github/instructions/containerization-docker-best-practices.instructions.md` insists on multi-stage builds, tiny base images, disciplined `.dockerignore` files, running as a non-root user, externalizing config via environment variables, explicit CMD/ENTRYPOINTs, health checks, resource limits, and continuous scanning/signing so deployment artifacts stay immutable and secure.

## Product
- Vite React Boilerplate is designed as a batteries-included product: pnpm + TypeScript + Tailwind + TanStack + Faker/Dayjs with Vitest + Playwright for testing, optional Docker packaging, and built-in devtools (README). `pnpm run test`, `pnpm run build`, and the Docker instructions in README cover the main flows for validating and shipping the product.

## .github
- `.github/instructions/INSTRUCTIONS.md` links to guides for APIs, bug reporting, CI/CD, React best practices, and more, `.github/prompts/PROMPTS.md` catalogs the system prompts, and `.github/agents/AGENTS.md` plus the skill library describe how the internal agents reason about this repo, so consult those when you need process or product context.
