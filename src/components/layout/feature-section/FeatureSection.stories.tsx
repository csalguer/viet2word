import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"


import { FeatureSection } from "./FeatureSection"
import { Box, VStack, SimpleGrid, Text, Icon } from "@chakra-ui/react"
import {
	IconBook,
	IconLanguage,
	IconCards,
	IconSparkles,
} from "@tabler/icons-react"

/**
 * # FeatureSection
 *
 * A section component for showcasing product features on landing pages.
 *
 * ## Features
 * - Flexible prop-based content
 * - Responsive grid layout
 * - Icon support for visual appeal
 *
 * ## Use Cases
 * - Landing page feature highlights
 * - Product capability showcase
 * - Service descriptions
 */
const meta: Meta<typeof FeatureSection> = {
	title: "Layout/FeatureSection",
	component: FeatureSection,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Section component for showcasing product features with flexible content and responsive layout.",
			},
		},
	},
	argTypes: {
		prop: {
			control: "text",
			description: "Feature section content or title",
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
type Story = StoryObj<typeof FeatureSection>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default feature section
 */
export const Default: Story = {
	args: {
		prop: "Dictionary Lookup",
	},
}

/**
 * Custom feature content
 */
export const CustomContent: Story = {
	args: {
		prop: "Multi-language Support",
	},
}

// =============================================================================
// FEATURE EXAMPLES
// =============================================================================

/**
 * Dictionary feature
 */
export const DictionaryFeature: Story = {
	args: {
		prop: "Comprehensive Dictionary",
	},
	parameters: {
		docs: {
			description: {
				story: "Feature section highlighting the dictionary lookup capability.",
			},
		},
	},
}

/**
 * Flashcard feature
 */
export const FlashcardFeature: Story = {
	args: {
		prop: "Interactive Flashcards",
	},
}

/**
 * AI-powered feature
 */
export const AIFeature: Story = {
	args: {
		prop: "AI-Powered Learning",
	},
}

// =============================================================================
// SHOWCASE
// =============================================================================

/**
 * Multiple features in grid layout
 */
export const FeatureGrid: Story = {
	render: () => (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={6} p={4}>
			<Box p={4} borderRadius="lg" borderWidth="1px">
				<VStack align="start" gap={2}>
					<IconBook size={32} />
					<Text fontWeight="bold">Dictionary</Text>
					<Text color="gray.600" fontSize="sm">
						Comprehensive Vietnamese-English dictionary with IPA phonetics
					</Text>
				</VStack>
			</Box>
			<Box p={4} borderRadius="lg" borderWidth="1px">
				<VStack align="start" gap={2}>
					<IconLanguage size={32} />
					<Text fontWeight="bold">Multi-language</Text>
					<Text color="gray.600" fontSize="sm">
						Support for Vietnamese, Chinese, Spanish, and more
					</Text>
				</VStack>
			</Box>
			<Box p={4} borderRadius="lg" borderWidth="1px">
				<VStack align="start" gap={2}>
					<IconCards size={32} />
					<Text fontWeight="bold">Flashcards</Text>
					<Text color="gray.600" fontSize="sm">
						Interactive flashcard system for vocabulary retention
					</Text>
				</VStack>
			</Box>
			<Box p={4} borderRadius="lg" borderWidth="1px">
				<VStack align="start" gap={2}>
					<IconSparkles size={32} />
					<Text fontWeight="bold">AI Learning</Text>
					<Text color="gray.600" fontSize="sm">
						AI-powered suggestions and personalized learning paths
					</Text>
				</VStack>
			</Box>
		</SimpleGrid>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Example of multiple feature sections arranged in a responsive grid.",
			},
		},
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
		prop: "Mobile Feature",
	},
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
	args: {
		prop: "Tablet Feature",
	},
	parameters: {
		viewport: {
			defaultViewport: "tablet",
		},
	},
}
