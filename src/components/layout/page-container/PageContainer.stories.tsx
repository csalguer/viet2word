import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"


import PageContainer from "./PageContainer"
import { Box, Text, VStack, Heading } from "@chakra-ui/react"

/**
 * # PageContainer
 *
 * A layout wrapper component that provides consistent page structure and styling.
 *
 * ## Features
 * - Consistent max-width and padding
 * - Responsive margins
 * - Semantic HTML structure
 *
 * ## Use Cases
 * - Wrapping page-level content
 * - Providing consistent layout constraints
 * - Main content area styling
 */
const meta: Meta<typeof PageContainer> = {
	title: "Layout/PageContainer",
	component: PageContainer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Layout wrapper providing consistent page structure with responsive margins and max-width constraints.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Page content to be wrapped",
			control: { type: "text" },
		},
	},
}

export default meta
type Story = StoryObj<typeof PageContainer>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default page container with sample content
 */
export const Default: Story = {
	args: {
		children: (
			<Box p={8} bg="gray.100" minH="200px" borderRadius="md">
				<Text>Page content goes here</Text>
			</Box>
		),
	},
}

/**
 * With rich content
 */
export const WithRichContent: Story = {
	args: {
		children: (
			<VStack align="stretch" gap={6} p={8}>
				<Heading size="xl">Page Title</Heading>
				<Text>
					This is a sample page with rich content demonstrating how the
					PageContainer wraps and constrains content appropriately.
				</Text>
				<Box p={4} bg="blue.50" borderRadius="md">
					<Text>Highlighted content section</Text>
				</Box>
				<Text color="gray.600">
					Additional paragraph content that fills out the page layout.
				</Text>
			</VStack>
		),
	},
}

/**
 * Empty container
 */
export const Empty: Story = {
	args: {
		children: null,
	},
}

// =============================================================================
// RESPONSIVE VARIANTS
// =============================================================================

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	args: {
		children: (
			<Box p={4} bg="gray.100" minH="200px">
				<Text>Mobile content</Text>
			</Box>
		),
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
		docs: {
			description: {
				story: "Page container with adjusted margins for mobile screens.",
			},
		},
	},
}

/**
 * Tablet viewport
 */
export const Tablet: Story = {
	args: {
		children: (
			<Box p={6} bg="gray.100" minH="200px">
				<Text>Tablet content</Text>
			</Box>
		),
	},
	parameters: {
		viewport: {
			defaultViewport: "tablet",
		},
	},
}

/**
 * Desktop viewport
 */
export const Desktop: Story = {
	args: {
		children: (
			<Box p={8} bg="gray.100" minH="200px">
				<Text>Desktop content with full width utilization</Text>
			</Box>
		),
	},
	parameters: {
		viewport: {
			defaultViewport: "desktop",
		},
	},
}

// =============================================================================
// NESTED CONTENT EXAMPLES
// =============================================================================

/**
 * Multiple sections
 */
export const MultipleSections: Story = {
	args: {
		children: (
			<VStack align="stretch" gap={8}>
				<Box p={6} bg="blue.50" borderRadius="lg">
					<Heading size="md" mb={2}>
						Section 1
					</Heading>
					<Text>First content section</Text>
				</Box>
				<Box p={6} bg="green.50" borderRadius="lg">
					<Heading size="md" mb={2}>
						Section 2
					</Heading>
					<Text>Second content section</Text>
				</Box>
				<Box p={6} bg="purple.50" borderRadius="lg">
					<Heading size="md" mb={2}>
						Section 3
					</Heading>
					<Text>Third content section</Text>
				</Box>
			</VStack>
		),
	},
	parameters: {
		docs: {
			description: {
				story: "Page container with multiple distinct content sections.",
			},
		},
	},
}
