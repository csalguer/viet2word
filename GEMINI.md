# GEMINI Summary

## Project: Vietnamese-English Dictionary & Reader
A modern web application for searching Vietnamese vocabulary and reading text with integrated dictionary lookups.

## System Overview
The project uses a **Serverless/Local-first** approach during development:
1.  **Data Source:** Raw dictionary data lives in `data/*.jsonl` (Kaikki, etc.).
2.  **Backend (Mock):** No separate backend process. `src/plugins/mock-api.ts` is a Vite plugin that reads these files into memory and handles `GET /api/dictionary` requests.
3.  **Frontend:** React 19 application utilizing TanStack Query to fetch from this mock endpoint.

## Key Tech Stack
- **Framework:** React 19, Vite 7.
- **Routing:** TanStack Router (`src/routes`, `src/routeTree.gen.ts`).
- **State:** Zustand (`src/lib/store.ts`) for client state (Saved Vocab).
- **Styling:** Tailwind CSS + Chakra UI.
- **Testing:** Vitest, Playwright.

## Developer Guide
### Getting Started
1.  **Install:** `pnpm install`
2.  **Setup:** `pnpm run setup` (Husky hooks, Playwright browsers)
3.  **Run:** `pnpm run dev`
    *   *Note:* The terminal will log "Loading mock data..." and "Loaded X entries" when the dev server starts. This confirms the mock API is active.

### Key Directories
- `src/features/`: Domain-specific logic (e.g., Reader).
- `src/lib/`: Core utilities, API clients (`api.ts`), and global stores (`store.ts`).
- `src/plugins/`: Vite plugins, specifically `mock-api.ts`.
- `data/`: Python scripts and JSONL datasets.

### Common Tasks
- **Adding Data:** Drop new `.jsonl` files into `data/` and update `src/plugins/mock-api.ts` to load them.
- **UI Changes:** Components are in `src/components/`. Pages are in `src/routes/` (lazy loaded) and `src/pages/`.
- **Testing:** run `pnpm run test` before pushing.