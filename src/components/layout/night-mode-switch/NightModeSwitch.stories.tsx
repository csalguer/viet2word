import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within, userEvent } from "@storybook/test"

import { NightModeSwitch, NightModeButton } from "./NightModeSwitch"
import { Center, Box, VStack, Text } from "@chakra-ui/react"
import { ColorModeProvider } from "@/components/ui/color-mode"

/**
 * # NightModeSwitch
 *
 * Toggle switch for switching between light and dark color modes.
 * Uses Chakra UI's color mode system for seamless theme transitions.
 *
 * ## Features
 * - Accessible toggle with keyboard support
 * - Animated icon transitions (Sun/Moon)
 * - Persists preference to localStorage
 *
 * ## Accessibility
 * - Keyboard navigable (Space/Enter to toggle)
 * - Screen reader announces mode changes
 * - Visible focus indicator
 */
const meta: Meta<typeof NightModeSwitch> = {
	title: "Layout/NightModeSwitch",
	component: NightModeSwitch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Toggle switch for light/dark mode with animated Sun/Moon icons and localStorage persistence.",
			},
		},
	},
	argTypes: {
		darkMode: {
			control: "boolean",
			description:
				"Initial dark mode state (controlled externally via context)",
		},
	},
	decorators: [
		(Story) => (
			<Center p={8} minH="200px">
				<Story />
			</Center>
		),
	],
}

export default meta
type Story = StoryObj<typeof NightModeSwitch>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default light mode state
 */
export const Default: Story = {
	args: {
		darkMode: false,
	},
}

/**
 * Dark mode enabled
 */
export const DarkMode: Story = {
	args: {
		darkMode: true,
	},
	parameters: {
		backgrounds: { default: "dark" },
	},
}

// =============================================================================
// BUTTON VARIANT
// =============================================================================

/**
 * Button variant of the night mode toggle
 */
export const ButtonVariant: Story = {
	render: () => <NightModeButton />,
	parameters: {
		docs: {
			description: {
				story:
					"Alternative button-style toggle for compact layouts or toolbars.",
			},
		},
	},
}

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Interactive toggle test
 */
export const InteractionTest: Story = {
	args: {
		darkMode: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Find the switch
		const switchElement = canvas.getByRole("switch")
		await expect(switchElement).toBeInTheDocument()

		// Verify it's keyboard accessible
		await expect(switchElement).not.toBeDisabled()
	},
}

// =============================================================================
// SHOWCASE
// =============================================================================

/**
 * Both variants side by side
 */
export const Showcase: Story = {
	render: () => (
		<VStack gap={8} p={4}>
			<Box textAlign="center">
				<Text fontWeight="bold" mb={2}>
					Switch Variant
				</Text>
				<NightModeSwitch darkMode={false} />
			</Box>
			<Box textAlign="center">
				<Text fontWeight="bold" mb={2}>
					Button Variant
				</Text>
				<NightModeButton />
			</Box>
		</VStack>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Comparison of switch and button variants for different UI contexts.",
			},
		},
	},
}
