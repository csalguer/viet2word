# Design Handoff Prompt

Use this prompt when handing off design specifications to the development agents.

## Template

```markdown
## 🎨 Design Handoff: [Feature/Component Name]

### Overview
[Brief description of what needs to be built]

### Visual Reference
- Figma/Sketch Link: [URL]
- Screenshots attached: [Yes/No]

### Component Specifications

#### Dimensions & Spacing
- Width: [value]
- Height: [value]
- Padding: [top/right/bottom/left]
- Margin: [top/right/bottom/left]
- Border radius: [value]

#### Colors (use palette tokens)
- Background: [palette.token or hex]
- Text: [palette.token or hex]
- Border: [palette.token or hex]
- Hover state: [palette.token or hex]
- Active state: [palette.token or hex]

#### Typography
- Font family: [value]
- Font size: [value]
- Font weight: [value]
- Line height: [value]
- Letter spacing: [value]

### States
- [ ] Default
- [ ] Hover
- [ ] Active/Pressed
- [ ] Focused
- [ ] Disabled
- [ ] Loading
- [ ] Error
- [ ] Empty

### Responsive Behavior
- Mobile (< 640px): [description]
- Tablet (640-1024px): [description]
- Desktop (> 1024px): [description]

### Animations
- Entry animation: [description]
- Exit animation: [description]
- Interaction animations: [description]
- Duration: [ms]
- Easing: [function]

### Accessibility
- ARIA label: [value]
- Keyboard navigation: [description]
- Screen reader considerations: [notes]

### Variants
1. **Primary**: [description]
2. **Secondary**: [description]
3. **[Other]**: [description]

### Props Interface
```typescript
interface ComponentNameProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // Add expected props
}
```

### Acceptance Criteria
- [ ] Matches design at all breakpoints
- [ ] All states implemented
- [ ] Animations smooth and performant
- [ ] Accessible (keyboard + screen reader)
- [ ] Storybook story created
- [ ] Dark mode support (if applicable)

### Agent Assignment
- **Primary**: Themeister (design implementation)
- **Support**: Di Scriptor (integration)
- **Review**: Barkeep (QA)
```

## Quick Handoff Format

For simpler components, use this condensed format:

```markdown
## 🎨 Quick Handoff: [Component Name]

**What**: [Brief description]
**Where**: [File path or location]
**Priority**: [High/Medium/Low]

**Specs**:
- Size: [dimensions]
- Colors: [palette tokens]
- Font: [typography]

**States**: Default, Hover, Disabled

**Notes**: [Any special considerations]
```
