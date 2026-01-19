# Docker Skill

## Description

Expertise in containerizing applications for reproducibility, portability, and isolation.

## Instructions

### Core Principles

- **Immutability**: Rebuild images for changes. Do not patch running containers.
- **Portability**: Avoid environment-specific hardcoding. Use ENVs.
- **Efficiency**: Minimize image size (Multi-stage builds).

### Dockerfile Best Practices

- **Multi-Stage**: Use `FROM ... AS build` and `FROM ... AS runtime`.
- **Layering**: Order instructions from least to most frequent changes.
- **User**: Run as non-root user where possible.

### Compose

- **Services**: Define clear service boundaries.
- **Volumes**: Use named volumes for persistence.

## Related Files

- `Dockerfile`
- `docker-compose.yml`

## Related Agents

- **Di Scriptor**: Implementation.
- **Di Scriptor**: CI/CD integration.
