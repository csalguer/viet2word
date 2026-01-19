# Language Labs

<p align="center">
  <a href="https://github.com/csalguer/language-labs/releases"><img src="https://img.shields.io/github/v/release/csalguer/language-labs?style=flat-square&color=blue" alt="Release"></a>
  <a href="https://github.com/csalguer/language-labs/actions"><img src="https://img.shields.io/github/actions/workflow/status/csalguer/language-labs/ci.yml?style=flat-square&label=CI" alt="CI"></a>
  <a href="https://github.com/csalguer/language-labs/commits"><img src="https://img.shields.io/github/last-commit/csalguer/language-labs?style=flat-square" alt="Last Commit"></a>
  <a href="https://github.com/csalguer/language-labs"><img src="https://img.shields.io/github/languages/top/csalguer/language-labs?style=flat-square" alt="Top Language"></a>
  <a href="https://github.com/csalguer/language-labs"><img src="https://img.shields.io/github/repo-size/csalguer/language-labs?style=flat-square" alt="Repo Size"></a>
  <a href="https://github.com/csalguer/language-labs/blob/main/LICENSE"><img src="https://img.shields.io/github/license/csalguer/language-labs?style=flat-square" alt="License"></a>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#development">Development</a> •
  <a href="#testing">Testing</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a>
</p>

---

A modern, batteries-included toolkit for building language learning applications with **Vite + React + TypeScript**.

## Quick Start

```bash
git clone https://github.com/csalguer/language-labs.git
cd language-labs/frontend && pnpm install && pnpm run dev
```

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, HeadlessUI, Heroicons |
| **State & Data** | Zustand, TanStack Query, TanStack Table |
| **Forms** | React Hook Form, Zod |
| **Routing** | TanStack Router |
| **Visualization** | Nivo (Line, Bar, Pie) |
| **i18n** | react-i18next |
| **Testing** | Vitest, React Testing Library, Playwright |
| **Quality** | ESLint, Prettier, Husky, Commitlint |
| **Docs** | Storybook |

## Development

```bash
pnpm install          # Install dependencies
pnpm run setup        # Initialize git hooks & Playwright
pnpm run dev          # Start dev server
pnpm run build        # Production build
pnpm run storybook    # Component documentation
```

> **Requirements:** Node.js 18+ and pnpm

## Testing

```bash
pnpm run test              # All tests
pnpm run test:unit         # Unit tests (Vitest)
pnpm run test:unit:coverage # With coverage
pnpm run test:e2e          # E2E tests (Playwright)
```

## Deployment

**Static:** Run `pnpm run build` and serve `dist/index.html`

**Docker:**
```bash
pnpm run build
docker build . -t language-labs
docker run -p 8080:80 language-labs
```

## Contributing

[![GitHub issues](https://img.shields.io/github/issues/csalguer/language-labs?style=flat-square)](https://github.com/csalguer/language-labs/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/csalguer/language-labs?style=flat-square)](https://github.com/csalguer/language-labs/pulls)

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](./LICENSE) — Built by [@csalguer](https://github.com/csalguer)
