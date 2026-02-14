# CLAUDE Summary

## Context
A **Vietnamese-English Dictionary & Reader** application built on a bleeding-edge React stack. It features a local-first development architecture where dictionary data is served via a Vite plugin directly from raw datasets.

## Architecture
- **Frontend:** React 19 + Vite 7 + TypeScript.
- **State/Routing:** TanStack Router, TanStack Query, Zustand (persisted for Saved Vocab).
- **UI:** Tailwind CSS, Framer Motion, Chakra UI, Lucide Icons.
- **Data Layer (Dev):** `src/plugins/mock-api.ts` implements a mock server within Vite. It loads `.jsonl` files from `data/` (e.g., `kaikki.org-dictionary-Vietnamese.jsonl`) into memory and serves them at `/api/dictionary`.
- **Data Pipeline:** Python scripts in `data/` (e.g., `main.py`, notebooks) are used to process/clean raw dictionary data.

## Core Features
- **Dictionary:** Searchable interface for Vietnamese words (IPA, meanings, POS).
- **Reader:** Text analysis tool (implied by `Reader.tsx`).
- **Saved Vocab:** Personal word list stored in `localStorage` via Zustand.
- **Testing:** Vitest (Unit), Playwright (E2E), MSW (Network mocking).

## Contributions
- **Setup:** `pnpm install` -> `pnpm run setup`. Ensure `data/` contains necessary `.jsonl` files for the mock API to work.
- **Commands:**
    - `pnpm run dev`: Starts frontend + Mock API (reads `data/*.jsonl`).
    - `pnpm run test`: Unit + E2E tests.
    - `pnpm run build`: Production build.
- **Conventions:**
    - **Commits:** Conventional Commits (enforced by Husky/Commitizen).
    - **Styling:** Tailwind first.
    - **Types:** Strict TypeScript. See `src/lib/types.ts` for domain models (`DictionaryItem`, `Meaning`).
    - **Components:** Functional components only.

## Documentation
- **Guides:** `.github/instructions/INSTRUCTIONS.md` (API, CI/CD, Best Practices).
- **Agents:** `.github/agents/AGENTS.md`.