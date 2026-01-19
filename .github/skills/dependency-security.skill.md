# Dependency Management & Security Skill

## Overview

This skill provides comprehensive expertise in dependency selection, security auditing, version management, and external resource vetting.

## Core Competencies

### Dependency Evaluation

- **Maintenance Status**: Activity, responsiveness, roadmap
- **Security Posture**: Vulnerabilities, audit history
- **Compatibility**: Stack integration, version conflicts
- **Bundle Impact**: Size, tree-shaking support
- **Licensing**: OSS compliance, commercial restrictions

### Security Practices

- **Audit Automation**: CI/CD integration
- **Vulnerability Monitoring**: Alerts and updates
- **Supply Chain Security**: Package integrity verification
- **Dependency Pinning**: Lock files, version strategies

## Tool Usage Patterns

### Package Analysis Commands

```fish
# 🐟 Fish Shell

# Check for vulnerabilities
pnpm audit

# Check outdated packages
pnpm outdated

# Why is this package installed?
pnpm why {package}

# List all dependencies
pnpm list --depth=0

# Check bundle size impact
# (requires bundlephobia CLI or web)
```

```bash
# 📜 Bash equivalent
npm audit
npm outdated
npm why {package}
npm list --depth=0
```

### Python Dependencies

```fish
# Check vulnerabilities with pip-audit
uv run pip-audit

# Check outdated
uv pip list --outdated

# Show dependency tree
uv pip show {package}
```

## Evaluation Frameworks

### Library Selection Checklist

```markdown
## Library: {name}

### Basic Info
- [ ] **Repository**: {url}
- [ ] **Package**: {npm/pypi url}
- [ ] **Documentation**: {docs url}
- [ ] **License**: {license type} ✅/⚠️

### Maintenance Health
- [ ] Last commit: {date} (< 3 months ago?)
- [ ] Open issues: {count} (reasonable?)
- [ ] Open PRs: {count} (being reviewed?)
- [ ] Contributors: {count} (bus factor?)
- [ ] Release frequency: {cadence}

### Popularity & Trust
- [ ] Stars: {count}
- [ ] Weekly downloads: {count}
- [ ] Used by: {notable projects}
- [ ] Sponsors/Backing: {org/company}

### Technical Fit
- [ ] TypeScript support: Native / DefinitelyTyped / None
- [ ] Bundle size: {size} (acceptable?)
- [ ] Tree-shakeable: Yes / No
- [ ] ESM support: Yes / No
- [ ] Peer dependencies: {list}
- [ ] Compatible with: React {version}, Node {version}

### Security
- [ ] Known vulnerabilities: {count}
- [ ] Security policy: Yes / No
- [ ] Audit history: Clean / Issues

### Alternatives Considered
| Library | Pros | Cons | Decision |
|---------|------|------|----------|
| {alt1} | {+} | {-} | Rejected: {reason} |
| {alt2} | {+} | {-} | Rejected: {reason} |
```

### Version Update Strategy

```markdown
## Update: {package} {old} → {new}

### Change Type
- [ ] Patch (bug fixes)
- [ ] Minor (new features, backward compatible)
- [ ] Major (breaking changes)

### Breaking Changes
{List from changelog}

### Migration Steps
1. {Step 1}
2. {Step 2}

### Testing Required
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing of {areas}

### Rollback Plan
\`\`\`fish
pnpm install {package}@{old_version}
\`\`\`
```

## Security Workflows

### Vulnerability Response

```markdown
## Vulnerability: {CVE/Advisory ID}

### Severity: Critical / High / Medium / Low

### Affected Package
- Package: {name}
- Installed version: {version}
- Fixed in: {version}

### Impact
{Description of potential impact}

### Resolution
- [ ] Update package: `pnpm update {package}`
- [ ] Verify fix: `pnpm audit`
- [ ] Test application
- [ ] Deploy

### If No Fix Available
- [ ] Assess exploitability in our context
- [ ] Implement workaround: {description}
- [ ] Monitor for fix release
- [ ] Consider alternative package
```

### Dependency Audit Workflow

```fish
# Weekly audit workflow
function dependency_audit
    echo "📦 Checking for vulnerabilities..."
    pnpm audit
    
    echo "📦 Checking for outdated packages..."
    pnpm outdated
    
    echo "📦 Checking bundle sizes..."
    # Run build with analysis
    pnpm build --analyze
end
```

## License Compatibility Matrix

| License | Can Use | Must Include License | Can Modify | Can Distribute | Commercial OK |
|---------|---------|---------------------|------------|----------------|---------------|
| MIT | ✅ | ✅ | ✅ | ✅ | ✅ |
| Apache-2.0 | ✅ | ✅ | ✅ | ✅ | ✅ |
| BSD-3-Clause | ✅ | ✅ | ✅ | ✅ | ✅ |
| ISC | ✅ | ✅ | ✅ | ✅ | ✅ |
| GPL-3.0 | ⚠️ | ✅ | ✅ | ⚠️ Copyleft | ✅ |
| LGPL-3.0 | ✅ | ✅ | ✅ | ✅ | ✅ |
| AGPL-3.0 | ⚠️ | ✅ | ✅ | ⚠️ Network Copyleft | ✅ |
| Unlicense | ✅ | ❌ | ✅ | ✅ | ✅ |

## Bundle Analysis

### Size Budget

```markdown
## Bundle Size Budget

| Category | Budget | Current | Status |
|----------|--------|---------|--------|
| Initial JS | < 100KB | {size} | ✅/⚠️/❌ |
| Total JS | < 300KB | {size} | ✅/⚠️/❌ |
| CSS | < 50KB | {size} | ✅/⚠️/❌ |

## Largest Dependencies

| Package | Size | Justification |
|---------|------|---------------|
| react | 40KB | Core framework |
| {package} | {size} | {reason} |
```

### Tree-Shaking Check

```typescript
// ❌ Bad - imports entire library
import _ from 'lodash'
_.get(obj, 'path')

// ✅ Good - imports only what's needed
import get from 'lodash/get'
get(obj, 'path')

// ✅ Better - use native or smaller alternative
obj?.path ?? defaultValue
```

## Best Practices

### Selection

- ✅ Prefer well-maintained, widely-used packages
- ✅ Check for TypeScript support
- ✅ Verify license compatibility
- ✅ Assess bundle size impact
- ✅ Consider alternatives before adding

### Security

- ✅ Run `pnpm audit` regularly
- ✅ Enable Dependabot/Renovate
- ✅ Pin versions in production
- ✅ Review dependency changes in PRs
- ✅ Have a vulnerability response plan

### Maintenance

- ✅ Update regularly (don't let debt accumulate)
- ✅ Read changelogs before major updates
- ✅ Test thoroughly after updates
- ✅ Document significant version decisions
