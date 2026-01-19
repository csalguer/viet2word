# Documentation Mastery Skill

## Overview

This skill provides comprehensive expertise in documentation creation, organization, and maintenance across all project artifacts.

## Core Competencies

### Documentation Types

- **API Documentation**: Endpoints, parameters, responses
- **Component Documentation**: Props, variants, usage examples
- **Architecture Documentation**: System design, data flow
- **Process Documentation**: Workflows, procedures, guides
- **Reference Documentation**: Glossaries, indices, catalogs

### Organization Patterns

- **Hierarchical**: Tree structure with clear parent-child relationships
- **Categorical**: Grouped by topic or function
- **Chronological**: Ordered by time or sequence
- **Alphabetical**: For reference and lookup

## Markdown Mastery

### Document Structure

```markdown
# Document Title

Brief description of the document's purpose.

## Table of Contents

- [Section 1](#section-1)
- [Section 2](#section-2)

## Section 1

### Subsection 1.1

Content with proper hierarchy.

## Section 2

More content.

---

## References

- [Link 1](url)
- [Link 2](url)
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|:---------|:--------:|---------:|
| Left     | Center   | Right    |
| align    | align    | align    |
```

### Callouts & Admonitions

```markdown
> **Note**: Important information

> **Warning**: Potential issues

> **Tip**: Helpful suggestions

> [!NOTE]
> GitHub-flavored note

> [!WARNING]
> GitHub-flavored warning
```

### Code Blocks with Language Hints

```markdown
​```typescript
// TypeScript code
const example: string = "value"
​```

​```fish
# Fish shell
set -x VAR value
​```

​```json
{
  "key": "value"
}
​```
```

### Mermaid Diagrams

```markdown
​```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
​```

​```mermaid
sequenceDiagram
    participant U as User
    participant A as API
    participant D as Database
    U->>A: Request
    A->>D: Query
    D-->>A: Result
    A-->>U: Response
​```
```

## Documentation Templates

### README Template

```markdown
# Project Name

Brief description.

## Features

- Feature 1
- Feature 2

## Installation

​```bash
npm install project-name
​```

## Usage

​```typescript
import { Component } from 'project-name'
​```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| option1 | string | "default" | Description |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT
```

### API Endpoint Documentation

```markdown
## `GET /api/resource`

Description of the endpoint.

### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Resource ID |
| limit | number | No | Max results (default: 10) |

### Response

​```json
{
  "data": [],
  "meta": {
    "total": 100,
    "page": 1
  }
}
​```

### Errors

| Code | Description |
|------|-------------|
| 400 | Invalid parameters |
| 404 | Resource not found |
```

### Component Documentation

```markdown
## ComponentName

Description of the component.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| variant | 'primary' \| 'secondary' | No | 'primary' | Visual style |
| onClick | () => void | No | - | Click handler |

### Usage

​```tsx
<ComponentName variant="primary" onClick={handleClick} />
​```

### Variants

#### Primary
For main actions.

#### Secondary
For supporting actions.
```

### ADR (Architecture Decision Record)

```markdown
# ADR-001: Decision Title

## Status

Accepted | Proposed | Deprecated | Superseded

## Context

What is the issue that we're seeing that is motivating this decision?

## Decision

What is the change that we're proposing and/or doing?

## Consequences

What becomes easier or more difficult because of this change?

### Positive
- Benefit 1
- Benefit 2

### Negative
- Drawback 1
- Drawback 2

## References

- [Link](url)
```

## Indexing & Cross-Referencing

### Index File Pattern

```markdown
# Index: {Category}

## Overview

Brief description of what this index covers.

## Contents

### A

- [Apple](./apple.md) - Description
- [Apricot](./apricot.md) - Description

### B

- [Banana](./banana.md) - Description

## See Also

- [Related Index](./related-index.md)
```

### Cross-Reference Linking

```markdown
<!-- In document A -->
For more details, see [Document B](./document-b.md#specific-section).

<!-- In document B -->
This relates to [Document A's topic](./document-a.md#topic).
```

## Best Practices

### Writing Style

- ✅ Use active voice
- ✅ Be concise but complete
- ✅ Include examples for complex topics
- ✅ Use consistent terminology
- ✅ Update when code changes

### Organization

- ✅ One topic per document
- ✅ Clear hierarchy (H1 → H2 → H3)
- ✅ Logical grouping
- ✅ Easy navigation (TOC for long docs)
- ✅ Consistent naming conventions

### Maintenance

- ✅ Review documentation in PRs
- ✅ Check links periodically
- ✅ Archive outdated docs
- ✅ Version documentation with code
- ✅ Automate where possible
