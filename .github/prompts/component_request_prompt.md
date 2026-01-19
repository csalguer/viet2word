# Component Request Prompt

Use this prompt when requesting a new component from the development agents.

## Template

```markdown
## 🧩 Component Request: [ComponentName]

### Purpose
[What problem does this component solve? What is its role in the UI?]

### User Story
As a [user type], I want to [action] so that [benefit].

### Location
- Directory: `src/components/[category]/[ComponentName]/`
- Files needed:
  - [ ] ComponentName.tsx
  - [ ] types.ts
  - [ ] index.ts
  - [ ] ComponentName.stories.tsx
  - [ ] ComponentName.module.css (if needed)

### API Design

```typescript
interface ComponentNameProps {
  /** Required: Main content or value */
  value: string;
  
  /** Optional: Visual variant */
  variant?: 'default' | 'outlined' | 'filled';
  
  /** Optional: Size preset */
  size?: 'sm' | 'md' | 'lg';
  
  /** Optional: Click handler */
  onClick?: () => void;
  
  /** Optional: Additional class name */
  className?: string;
  
  /** Optional: Child elements */
  children?: React.ReactNode;
}
```

### Usage Example

```tsx
// Basic usage
<ComponentName value="Hello" />

// With variants
<ComponentName value="Hello" variant="outlined" size="lg" />

// With children
<ComponentName value="Hello">
  <Icon />
</ComponentName>
```

### Design Reference
- Figma: [URL if available]
- Similar to: [existing component or external reference]
- Palette tokens to use: [list relevant tokens]

### Behavior
- On click: [description]
- On hover: [description]
- On focus: [description]
- Keyboard: [description]

### Dependencies
- Uses: [existing components/hooks]
- Used by: [parent components that will use this]

### Storybook Stories Needed
1. **Default**: Basic usage
2. **AllVariants**: Show all variant options
3. **AllSizes**: Show all size options
4. **Interactive**: With play function for testing
5. **Responsive**: Mobile/tablet views

### Acceptance Criteria
- [ ] Component renders correctly
- [ ] All props work as documented
- [ ] Responsive behavior correct
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Storybook stories complete
- [ ] TypeScript types exported
- [ ] Matches design spec

### Agent Assignment
- **Lead**: [Di Scriptor / Themeister]
- **Types**: Typescripter
- **Stories**: Storied Scribe
- **Review**: Barkeep
```

## Quick Request Format

```markdown
## 🧩 Quick Request: [ComponentName]

**What**: [Brief description]
**Props**: `value: string`, `variant?: 'a' | 'b'`, `onClick?: () => void`
**Similar to**: [Existing component or reference]
**Priority**: [High/Medium/Low]
**Agent**: [Themeister / Di Scriptor]
```
