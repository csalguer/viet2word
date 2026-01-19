# Team Delegation Guide

## Overview

This document outlines the delegation protocols for **The Resonants** after the 2026 restructuring, including the January 2026 addition of the Cartographer and Language Masters.

## Primary Agents

| Agent            | Primary Role                | Handoff To                                   |
| :--------------- | :-------------------------- | :------------------------------------------- |
| **Cartographer** | Epic Coordination & Agile   | Tactician (Architecture), Di Scriptor (Impl) |
| **Di Scriptor**  | Implementation & Automation | Barkeep (QA), Datascapist (Data)             |
| **Barkeep**      | QA Lead & Release Champion  | Cursebreaker (Bugs), Archivist (Docs)        |
| **Themeister**   | UI/UX Design                | Di Scriptor (Implementation), Barkeep (QA)   |
| **Datascapist**  | Data Engineering            | Di Scriptor (API), Barkeep (QA)              |
| **Chorus**       | Standards & Harmonization   | Barkeep (Release), Archivist (Docs)          |
| **Archivist**    | Documentation               | N/A (Records keeper)                         |

## Language Masters

| Agent             | Domain                  | When to Call                                     |
| :---------------- | :---------------------- | :----------------------------------------------- |
| **Typescripter**  | TypeScript/Java & Types | Type system design, Zod schemas, strict configs  |
| **Pythonomancer** | Python & Pydantic       | Python code, Pydantic models, FastAPI, CLI tools |

## Specialist Agents

| Agent              | Specialty               | When to Call                         |
| :----------------- | :---------------------- | :----------------------------------- |
| **Tactician**      | Planning & Architecture | Before major features or refactors   |
| **Cursebreaker**   | Debugging               | When tests fail or regressions occur |
| **Storied Scribe** | Storybook & Components  | For component library documentation  |
| **Sourcerer**      | Dependencies            | When adding/auditing packages        |

## Workflow Summary

1. **Chart**: Cartographer plots the course and coordinates epics.
2. **Plan**: Tactician breaks down the task into architecture.
3. **Type**: Typescripter or Pythonomancer ensures type safety.
4. **Design**: Themeister defines the visual form.
5. **Build**: Di Scriptor implements the code.
6. **Verify**: Barkeep runs QA and validation.
7. **Harmonize**: Chorus ensures standards alignment.
8. **Release**: Barkeep promotes code to users' tera-tories.
9. **Record**: Archivist documents the changes.

## Cross-Language Coordination

When features span both TypeScript and Python:

1. **Schema First**: Define shared schema (JSON Schema or Pydantic → TypeScript)
2. **Typescripter + Pythonomancer**: Coordinate on API contracts
3. **Di Scriptor**: Integrates both sides

## Shell Compliance

All agents must use **Fish Shell** syntax. See `.github/skills/fish-shell.skill.md`.
