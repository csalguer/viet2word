# Storybook Story Request Prompt

Use this template when requesting new Storybook stories from the StoriedScribe.

---

## Story Request: {Component Name}

### Request Info
- **Requester**: {agent}
- **Component Path**: `{src/components/path/Component.tsx}`
- **Priority**: High / Medium / Low
- **Date**: {date}

---

## Component Overview

### Description

{Brief description of what this component does}

### Props Interface

```typescript
interface ComponentProps {
  // List key props
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
}
```

---

## Requested Stories

### Core Stories

- [ ] **Default**: Base component with default props
- [ ] **All Variants**: Show each variant option
- [ ] **All Sizes**: Show each size option
- [ ] **Disabled State**: Component in disabled state
- [ ] **With Children**: Component with various children

### Interactive Stories

- [ ] **With Actions**: Demonstrate event handlers
- [ ] **Controlled**: Show controlled component behavior
- [ ] **Form Integration**: If used in forms

### Edge Cases

- [ ] **Long Content**: How it handles overflow
- [ ] **Empty State**: When no data/content provided
- [ ] **Loading State**: If applicable
- [ ] **Error State**: If applicable

### Responsive Stories

- [ ] **Mobile**: 320px viewport
- [ ] **Tablet**: 768px viewport
- [ ] **Desktop**: 1024px+ viewport

### Accessibility Stories

- [ ] **Keyboard Navigation**: Tab, Enter, Escape
- [ ] **Screen Reader**: Proper ARIA labels
- [ ] **Color Contrast**: Meets WCAG AA
- [ ] **Focus States**: Visible focus indicators

---

## Play Functions (Interaction Tests)

### Required Interactions

```typescript
// Example play function structure
export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    
    // Find elements
    const button = canvas.getByRole('button')
    
    // Interact
    await userEvent.click(button)
    
    // Assert
    await expect(button).toHaveAttribute('aria-pressed', 'true')
  }
}
```

### Interactions to Test

- [ ] Click handling
- [ ] Hover states
- [ ] Focus management
- [ ] Keyboard shortcuts
- [ ] Form validation

---

## Documentation Requirements

### Story Documentation

- [ ] Component description
- [ ] Props table (autodocs)
- [ ] Usage examples in docs
- [ ] Do's and Don'ts
- [ ] Accessibility notes

### Code Examples

```tsx
// Show preferred usage pattern
<Component variant="primary" size="md">
  Click me
</Component>
```

---

## Visual Specifications

### Design Reference

- Figma: {link if available}
- Screenshot: {attached or described}

### Theme Integration

- [ ] Works with light mode
- [ ] Works with dark mode
- [ ] Uses theme tokens correctly

---

## Checklist for StoriedScribe

### Before Starting

- [ ] Read the component implementation
- [ ] Identify all props and variants
- [ ] Check existing related stories

### Story Quality

- [ ] Deterministic (no random data)
- [ ] Self-contained (no external dependencies)
- [ ] Properly categorized (title path)
- [ ] Tagged for autodocs

### Testing

- [ ] Visual regression baseline captured
- [ ] Play functions pass
- [ ] Accessibility checks pass

### Documentation

- [ ] Stories tell a coherent narrative
- [ ] Edge cases documented
- [ ] Usage guidance included

---

## Handoff

Once complete, notify:
- **Themeister**: For visual review
- **Barkeep**: For QA validation
- **Archivist**: For documentation index
