# React Development Skill

## Description

Expertise in building scalable, performant frontend applications using React 19, Vite, and TypeScript.

## Instructions

### Component Architecture

- **Functional Components**: Strictly use functional components with Hooks.
- **Single Responsibility**: Components should do one thing. Extract sub-components for complex UIs.
- **File Structure**: `src/components/[Domain]/[Component].tsx`.

### State Management

- **Local State**: `useState` for simple UI toggles.
- **Complex State**: `useReducer` for complex logic.
- **Global State**: Minimal usage of Context API.

### Performance

- **Memoization**: Use `useMemo` for expensive variations, `useCallback` for stable handlers passed to children.
- **Lazy Loading**: `lazy(() => import(...))` for route-level splitting.

### Hooks

- **Rules**: Top-level only. Unconditional execution.
- **Custom Hooks**: Extract reusable logic into `use[Feature]` hooks in `src/lib/hooks/`.

## Related Files

- `src/App.tsx`
- `vite.config.ts`

## Related Agents

- **Di Scriptor**: Primary implementer.
- **Themeister**: UI Stylists.
