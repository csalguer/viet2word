# Codebase Analysis & Discovery Skill

## Overview

This skill enables deep analysis and understanding of codebases through systematic search, pattern recognition, and structural analysis.

## Core Competencies

### Search Strategies

- **Semantic Search**: Find code by meaning and context
- **Grep Search**: Find exact patterns and usages
- **File Search**: Locate files by name patterns
- **Usage Analysis**: Trace dependencies and references

### Analysis Patterns

- **Architecture Discovery**: Understand project structure
- **Pattern Recognition**: Identify coding conventions
- **Dependency Mapping**: Trace imports and relationships
- **Gap Analysis**: Find missing implementations

## Tool Usage Patterns

### semantic_search

Best for conceptual queries when you don't know exact terms:

```typescript
// Find authentication-related code
semantic_search({ query: "user authentication login session management" })

// Find error handling patterns
semantic_search({ query: "error handling try catch exception boundary" })

// Find API integration patterns
semantic_search({ query: "API client fetch request response handling" })
```

### grep_search

Best for exact patterns and comprehensive coverage:

```typescript
// Find all TODOs and FIXMEs
grep_search({ query: "TODO|FIXME|XXX|HACK", isRegexp: true })

// Find all exports from a module
grep_search({ query: "export (const|function|class|type|interface)", isRegexp: true, includePattern: "src/**/*.ts" })

// Find all usages of a specific hook
grep_search({ query: "useSavedVocabStore", isRegexp: false })

// Find component definitions
grep_search({ query: "function [A-Z][a-zA-Z]+\\(", isRegexp: true, includePattern: "**/*.tsx" })

// Find all story files
grep_search({ query: "Meta<typeof", isRegexp: false, includePattern: "**/*.stories.tsx" })
```

### file_search

Best for finding files by name pattern:

```typescript
// Find all story files
file_search({ query: "**/*.stories.tsx" })

// Find all type definition files
file_search({ query: "**/types.ts" })

// Find all test files
file_search({ query: "**/*.test.{ts,tsx}" })

// Find configuration files
file_search({ query: "**/tsconfig*.json" })
```

### list_code_usages

Best for tracing dependencies and implementations:

```typescript
// Find all usages of a component
list_code_usages({ symbolName: "VocabCard", filePaths: ["src/components/dictionary/vocab-card/VocabCard.tsx"] })

// Find interface implementations
list_code_usages({ symbolName: "DictionaryItem" })

// Trace hook usage
list_code_usages({ symbolName: "useDictionaryEntries" })
```

## Analysis Templates

### Architecture Survey

```markdown
## Project Architecture Survey

### Entry Points
- Main: {path}
- Routes: {path}
- Config: {path}

### Core Directories
| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| src/components | UI Components | {count} files |
| src/pages | Page Components | {count} files |
| src/lib | Utilities | {count} files |

### Technology Stack
- Framework: {React/Vue/etc}
- Routing: {TanStack Router/React Router/etc}
- State: {Zustand/Redux/etc}
- Styling: {Tailwind/Chakra/etc}

### Patterns Identified
1. {Pattern 1}
2. {Pattern 2}
```

### Component Inventory

```markdown
## Component Inventory

### By Category
| Category | Components | Stories | Tests |
|----------|------------|---------|-------|
| Layout | {list} | ✅/❌ | ✅/❌ |
| Navigation | {list} | ✅/❌ | ✅/❌ |
| Dictionary | {list} | ✅/❌ | ✅/❌ |

### Coverage Gaps
- Missing Stories: {list}
- Missing Tests: {list}
- Missing Types: {list}
```

### Dependency Graph

```markdown
## Module Dependencies

### {Module Name}
Imports:
- {dep1} from {path1}
- {dep2} from {path2}

Used By:
- {consumer1}
- {consumer2}

External Dependencies:
- {npm_package1}
- {npm_package2}
```

## Investigation Workflows

### "Find All X" Pattern

```fish
# Step 1: Broad search
grep_search "pattern" --isRegexp

# Step 2: Filter by location
grep_search "pattern" --includePattern "src/components/**"

# Step 3: Read specific files
read_file {path} --startLine X --endLine Y
```

### "Understand This Code" Pattern

```fish
# Step 1: Find the file
file_search "**/ComponentName*"

# Step 2: Read the implementation
read_file {path} 1-100

# Step 3: Find all usages
list_code_usages "ComponentName"

# Step 4: Check for tests/stories
file_search "**/ComponentName.{test,stories}.*"
```

### "What's Missing" Pattern

```fish
# Step 1: List all components
file_search "src/components/**/*.tsx"

# Step 2: List all stories
file_search "**/*.stories.tsx"

# Step 3: Compare and find gaps
# (Components without corresponding stories)

# Step 4: List all TODOs
grep_search "TODO|FIXME" --isRegexp
```

## Best Practices

### Efficient Searching

- Use `isRegexp: true` for complex patterns
- Use `includePattern` to scope searches
- Start broad, then narrow down
- Combine tools for comprehensive coverage

### Context Building

- Read enough lines for full context (50-100 lines)
- Follow imports to understand dependencies
- Check related files (types.ts, index.ts)
- Look for patterns across similar files

### Documentation

- Record findings in structured format
- Note patterns for future reference
- Document gaps and TODOs found
- Create actionable items from analysis
