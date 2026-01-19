# Library Evaluation Prompt

Use this template when the Sourcerer evaluates a new dependency.

---

## Library Evaluation: {Package Name}

### Request Info
**Requested by**: {agent}
**Purpose**: {why we need this}
**Date**: {date}

---

## Quick Assessment

### Package Identity
- **Name**: {package-name}
- **NPM/PyPI**: {registry url}
- **Repository**: {github url}
- **Documentation**: {docs url}
- **License**: {license}

### Vital Signs

| Metric | Value | Status |
|--------|-------|--------|
| Last Commit | {date} | ✅ / ⚠️ / ❌ |
| Weekly Downloads | {number} | ✅ / ⚠️ |
| Open Issues | {number} | ✅ / ⚠️ |
| Stars | {number} | ℹ️ |
| Bundle Size | {size} | ✅ / ⚠️ / ❌ |
| TypeScript | Native / DT / None | ✅ / ⚠️ / ❌ |

### Security Check

```fish
# Run these commands
pnpm audit {package-name}
# or for evaluation before install:
# Check npm advisory database
```

- [ ] No known vulnerabilities
- [ ] Security policy exists
- [ ] Regular security updates

---

## Deep Evaluation

### Why This Library?

{Problem it solves}

### Alternatives Considered

| Library | Pros | Cons | Size | Maint. |
|---------|------|------|------|--------|
| **{evaluated}** | {+} | {-} | {KB} | Active |
| {alt1} | {+} | {-} | {KB} | {status} |
| {alt2} | {+} | {-} | {KB} | {status} |

### Integration Assessment

- [ ] Compatible with React {version}
- [ ] Compatible with Node {version}
- [ ] No conflicting peer dependencies
- [ ] Tree-shakeable
- [ ] ESM support
- [ ] Works with our build system (Vite)

### Bundle Impact

```
Current bundle: {size}
With package:   {size}
Delta:          {size}
```

### Usage Examples

```typescript
// How we would use it
import { feature } from '{package}'

// Example code
```

---

## Recommendation

### Verdict: ✅ Approve / ⚠️ Conditional / ❌ Reject

**Reasoning**: {explanation}

### Conditions (if applicable)

- {Condition 1}
- {Condition 2}

### Installation

```fish
# If approved
pnpm add {package-name}
```

### Next Steps

1. {Step 1} → **{agent}**
2. {Step 2} → **{agent}**
