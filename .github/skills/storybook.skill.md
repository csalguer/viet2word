# Storybook & Component Documentation Skill

## Overview

This skill provides expertise in Storybook for component development, documentation, and visual testing. It enables the creation of interactive component catalogs and design systems.

## Core Competencies

### Storybook Development

- **Story Creation**: Writing stories with controls, args, and decorators
- **Component Documentation**: MDX docs, argTypes, and descriptions
- **Visual Testing**: Chromatic, Percy, or Storybook Test Runner
- **Addons**: Controls, Actions, Viewport, Accessibility, Interactions

### Design System Integration

- **Theme Providers**: Wrapping stories with Chakra/theme context
- **Palette Visualization**: Documenting color systems
- **Typography Scales**: Font hierarchy documentation

## Standards

### Story File Structure

```typescript
// ComponentName.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { ComponentName } from "./ComponentName"

const meta: Meta<typeof ComponentName> = {
  title: "Category/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Description of the component's purpose and usage.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Visual variant of the component",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    children: "Default content",
  },
}

export const WithVariant: Story = {
  args: {
    variant: "primary",
    children: "Primary variant",
  },
}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button"))
  },
}
```

### Decorator Patterns

```typescript
// .storybook/preview.tsx
import { ChakraProvider } from "@chakra-ui/react"
import system from "../src/theme/theme"
import { withPalette } from "../src/styles/PaletteContext"
import { ThemeModeProvider } from "../src/styles/ThemeModeContext"

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <ThemeModeProvider>
          {withPalette(<Story />)}
        </ThemeModeProvider>
      </ChakraProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
```

### Visual Testing with Test Runner

```typescript
// ComponentName.stories.tsx
import { expect } from "@storybook/jest"
import { within, userEvent } from "@storybook/testing-library"

export const ClickableCard: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    
    // Find and click the card
    const card = canvas.getByTestId("vocab-card")
    await userEvent.click(card)
    
    // Verify expanded state
    await expect(canvas.getByText("Definition")).toBeVisible()
  },
}
```

## Story Categories

Organize stories by domain:

```
stories/
├── Components/
│   ├── Dictionary/
│   │   ├── VocabCard.stories.tsx
│   │   └── CardList.stories.tsx
│   ├── Navigation/
│   │   ├── NavBar.stories.tsx
│   │   └── SearchBar.stories.tsx
│   └── Layout/
│       ├── PageContainer.stories.tsx
│       └── HeroSection.stories.tsx
├── Pages/
│   ├── Home.stories.tsx
│   ├── Dictionary.stories.tsx
│   └── Reader.stories.tsx
└── Design System/
    ├── Colors.stories.mdx
    ├── Typography.stories.mdx
    └── Spacing.stories.mdx
```

## Accessibility Testing

```typescript
// Enable a11y addon checks
export const AccessibleCard: Story = {
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "label", enabled: true },
        ],
      },
    },
  },
}
```

## Responsive Testing

```typescript
export const ResponsiveCard: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

// Or test multiple viewports
export const AllViewports: Story = {
  parameters: {
    chromatic: {
      viewports: [320, 768, 1200],
    },
  },
}
```

## MDX Documentation

```mdx
{/* ComponentName.mdx */}
import { Meta, Story, Canvas, ArgsTable } from "@storybook/blocks"
import * as ComponentStories from "./ComponentName.stories"

<Meta of={ComponentStories} />

# ComponentName

Description of the component and its purpose.

## Usage

<Canvas of={ComponentStories.Default} />

## Props

<ArgsTable of={ComponentStories} />

## Variants

### Primary

<Canvas of={ComponentStories.Primary} />

### Secondary

<Canvas of={ComponentStories.Secondary} />
```

## References

- [Storybook Documentation](https://storybook.js.org/docs)
- [Chromatic Visual Testing](https://www.chromatic.com/docs/)
- [Storybook Test Runner](https://storybook.js.org/docs/react/writing-tests/test-runner)
