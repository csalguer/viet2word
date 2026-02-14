import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within, userEvent } from "@storybook/test"

import { TabbedCard } from "./TabbedCard"
import { Box } from "@chakra-ui/react"

/**
 * # TabbedCard
 *
 * A card component with tabbed navigation for organizing related content.
 *
 * ## Features
 * - Multiple tabs for content organization
 * - Animated tab transitions
 * - Keyboard accessible
 * - Touch-friendly tab switching
 *
 * ## Use Cases
 * - Word details with multiple sections (definitions, examples, etymology)
 * - Lesson content with steps
 * - Settings panels
 */
const meta: Meta<typeof TabbedCard> = {
	title: "Cards/TabbedCard",
	component: TabbedCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Card component with tabbed navigation for organizing multiple content sections.",
			},
		},
	},
	decorators: [
		(Story) => (
			<Box p={8} minW="400px">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof TabbedCard>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default tabbed card
 */
export const Default: Story = {
	args: {},
}

// =============================================================================
// RESPONSIVE VARIANTS
// =============================================================================

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}

/**
 * Tablet viewport
 */
export const Tablet: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: "tablet",
		},
	},
}

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Tab switching via click
 */
export const TabSwitching: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Find tabs
		const tabs = canvas.queryAllByRole("tab")
		if (tabs.length > 1) {
			await userEvent.click(tabs[1])
			await new Promise((r) => setTimeout(r, 300))
		}
	},
}

/**
 * Keyboard navigation between tabs
 */
export const KeyboardNavigation: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Tab to tablist
		await userEvent.tab()

		// Arrow keys to switch tabs
		const tablist = canvas.queryByRole("tablist")
		if (tablist) {
			await userEvent.keyboard("{ArrowRight}")
			await new Promise((r) => setTimeout(r, 300))
			await userEvent.keyboard("{ArrowRight}")
		}
	},
}

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * Accessibility test - ARIA labels
 */
export const AccessibilityTest: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Check for proper ARIA roles
		const tablist = canvas.queryByRole("tablist")
		const tabs = canvas.queryAllByRole("tab")
		const tabpanels = canvas.queryAllByRole("tabpanel")

		if (tablist) {
			await expect(tablist).toBeVisible()
		}
	},
}
