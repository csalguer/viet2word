# Web Research & Resource Discovery Skill

## Overview

This skill enables agents to effectively research, discover, and synthesize information from web resources, documentation, and external repositories.

## Core Competencies

### Web Fetching & Analysis

- **URL Fetching**: Retrieve content from documentation sites, GitHub repos, API docs
- **Content Extraction**: Parse meaningful information from web pages
- **Source Validation**: Verify credibility and currency of sources

### Research Strategies

```markdown
## Research Protocol

1. **Define the Question**: What specific information do we need?
2. **Identify Sources**: Where is this information likely to exist?
3. **Fetch & Extract**: Retrieve the content systematically
4. **Synthesize**: Combine findings into actionable knowledge
5. **Cite**: Document sources for future reference
```

## Tool Usage Patterns

### fetch_webpage

```typescript
// Fetch documentation or reference material
fetch_webpage({
  urls: ["https://docs.example.com/api"],
  query: "authentication configuration options"
})

// Multi-source research
fetch_webpage({
  urls: [
    "https://github.com/org/repo/blob/main/README.md",
    "https://raw.githubusercontent.com/org/repo/main/docs/guide.md"
  ],
  query: "installation setup configuration"
})
```

### GitHub Raw URLs

For reliable GitHub content fetching:

```
// README and docs
https://raw.githubusercontent.com/{owner}/{repo}/main/README.md
https://raw.githubusercontent.com/{owner}/{repo}/main/docs/{file}.md

// Package manifests
https://raw.githubusercontent.com/{owner}/{repo}/main/package.json
https://raw.githubusercontent.com/{owner}/{repo}/main/pyproject.toml

// Configuration files
https://raw.githubusercontent.com/{owner}/{repo}/main/.storybook/main.ts
https://raw.githubusercontent.com/{owner}/{repo}/main/tsconfig.json
```

### API Documentation Sites

```
// NPM package info
https://registry.npmjs.org/{package}

// PyPI package info
https://pypi.org/pypi/{package}/json

// GitHub API
https://api.github.com/repos/{owner}/{repo}
https://api.github.com/repos/{owner}/{repo}/contents/{path}
```

## Research Templates

### Library Evaluation

```markdown
## Library: {name}

### Quick Facts
- **Repository**: {url}
- **NPM/PyPI**: {registry_url}
- **Last Updated**: {date}
- **Weekly Downloads**: {count}
- **License**: {license}

### Evaluation
- [ ] Active maintenance (commits in last 3 months)
- [ ] Good documentation
- [ ] TypeScript support / type definitions
- [ ] Reasonable bundle size
- [ ] No critical vulnerabilities
- [ ] Compatible with our stack

### Sources Consulted
1. {source1}
2. {source2}
```

### Pattern Research

```markdown
## Pattern: {name}

### Problem
{What problem does this pattern solve?}

### Solution
{How does the pattern address it?}

### Examples Found
1. **{Project1}**: {implementation_notes}
2. **{Project2}**: {implementation_notes}

### Applicability to Our Project
{How we can apply this}

### Sources
- {url1}
- {url2}
```

## Best Practices

### Do

- ✅ Use raw GitHub URLs for reliable content fetching
- ✅ Query multiple sources for comprehensive research
- ✅ Extract specific, relevant content with targeted queries
- ✅ Document all sources for traceability
- ✅ Verify information currency (check dates)

### Don't

- ❌ Rely on a single source
- ❌ Fetch without a specific query/purpose
- ❌ Trust outdated documentation blindly
- ❌ Ignore license compatibility
- ❌ Skip source validation

## Integration with Agents

| Agent | Research Focus |
|-------|----------------|
| **Sourcerer** | Library discovery, security audits, compatibility |
| **Tactician** | Architecture patterns, design decisions |
| **Archivist** | Documentation standards, taxonomy examples |
| **StoriedScribe** | Component library patterns, Storybook examples |
| **Cartographer** | Project management tools, workflow patterns |
