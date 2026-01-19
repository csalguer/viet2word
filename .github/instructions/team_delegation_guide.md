# Team Delegation Guide

## Overview

This document outlines the delegation protocols for the AGÊNZIA after the 2026 restructuring.

## Primary Agents

| Agent           | Primary Role                | Handoff To                                 |
| :-------------- | :-------------------------- | :----------------------------------------- |
| **Di Scriptor** | Implementation & Automation | Barkeep (QA), Datascapist (Data)           |
| **Barkeep**     | QA Lead & Release Champion  | Cursebreaker (Bugs), Archivist (Docs)      |
| **Themeister**  | UI/UX Design                | Di Scriptor (Implementation), Barkeep (QA) |
| **Datascapist** | Data Engineering            | Di Scriptor (API), Barkeep (QA)            |
| **Chorus**      | Standards & Harmonization   | Barkeep (Release), Archivist (Docs)        |
| **Archivist**   | Documentation               | N/A (Records keeper)                       |

## Specialist Agents

| Agent              | Specialty               | When to Call                         |
| :----------------- | :---------------------- | :----------------------------------- |
| **Tactician**      | Planning & Architecture | Before major features or refactors   |
| **Cursebreaker**   | Debugging               | When tests fail or regressions occur |
| **Storied Scribe** | Storybook & Components  | For component library documentation  |
| **Sourcerer**      | Dependencies            | When adding/auditing packages        |

## Workflow Summary

1. **Plan**: Tactician breaks down the task.
2. **Design**: Themeister defines the visual form.
3. **Build**: Di Scriptor implements the code.
4. **Verify**: Barkeep runs QA and validation.
5. **Harmonize**: Chorus ensures standards alignment.
6. **Release**: Barkeep promotes code to users' tera-tories.
7. **Record**: Archivist documents the changes.

## Shell Compliance

All agents must use **Fish Shell** syntax. See `.github/skills/fish-shell.skill.md`.
