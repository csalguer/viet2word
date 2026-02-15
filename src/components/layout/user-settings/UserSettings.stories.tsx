import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"


import { UserSettings, UserSettingsProps } from "./UserSettings"
import { Box, VStack, Text, HStack } from "@chakra-ui/react"

// Sample gradient configurations
const sampleGradients = {
	sunset: {
		color: ["#ff7e5f", "#feb47b"],
		style: 0, // linear
	},
	ocean: {
		color: ["#2193b0", "#6dd5ed"],
		style: 0,
	},
	forest: {
		color: ["#134e5e", "#71b280"],
		style: 1, // radial
	},
	midnight: {
		color: ["#232526", "#414345"],
		style: 0,
	},
}

/**
 * # UserSettings
 *
 * User preferences panel for theme and display customization.
 *
 * ## Features
 * - Dark mode toggle
 * - Background gradient selection
 * - Linear and radial gradient styles
 *
 * ## Planned Features
 * - Font size preferences
 * - Language/locale selection
 * - Notification settings
 * - Keyboard shortcut customization
 */
const meta: Meta<typeof UserSettings> = {
	title: "Layout/UserSettings",
	component: UserSettings,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"User preferences panel for theme customization including dark mode and background gradients.",
			},
		},
	},
	argTypes: {
		settings: {
			description:
				"User settings object containing darkMode and background preferences",
			control: { type: "object" },
		},
	},
	decorators: [
		(Story) => (
			<Box p={8} minW="300px">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof UserSettings>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Light mode with sunset gradient
 */
export const Default: Story = {
	args: {
		settings: {
			darkMode: false,
			background: sampleGradients.sunset,
		},
	},
}

/**
 * Dark mode enabled
 */
export const DarkMode: Story = {
	args: {
		settings: {
			darkMode: true,
			background: sampleGradients.midnight,
		},
	},
	parameters: {
		backgrounds: { default: "dark" },
	},
}

// =============================================================================
// GRADIENT VARIANTS
// =============================================================================

/**
 * Ocean gradient theme
 */
export const OceanTheme: Story = {
	name: "Ocean Gradient",
	args: {
		settings: {
			darkMode: false,
			background: sampleGradients.ocean,
		},
	},
}

/**
 * Forest gradient theme (radial)
 */
export const ForestTheme: Story = {
	name: "Forest Gradient (Radial)",
	args: {
		settings: {
			darkMode: false,
			background: sampleGradients.forest,
		},
	},
}

// =============================================================================
// SHOWCASE
// =============================================================================

/**
 * All gradient options displayed
 */
export const GradientShowcase: Story = {
	render: () => (
		<VStack gap={4} align="stretch">
			<Text fontWeight="bold" fontSize="lg">
				Available Gradients
			</Text>
			{Object.entries(sampleGradients).map(([name, gradient]) => (
				<HStack key={name} gap={4}>
					<Box
						w="60px"
						h="40px"
						borderRadius="md"
						bgGradient={`to-r, ${gradient.color[0]}, ${gradient.color[1]}`}
					/>
					<Text textTransform="capitalize">{name}</Text>
					<Text color="gray.500" fontSize="sm">
						{gradient.style === 0 ? "Linear" : "Radial"}
					</Text>
				</HStack>
			))}
		</VStack>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Preview of all available gradient options for background customization.",
			},
		},
	},
}
