import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn, expect, within, userEvent } from "@storybook/test"

import { CardList } from "./CardList"
import { DATA, MOCK_CARD_INFO } from "@/test/mockData"
import { Box } from "@chakra-ui/react"

const { data } = MOCK_CARD_INFO

/**
 * # CardList
 *
 * A grid/list display of vocabulary cards with selection and zoom interactions.
 *
 * ## Features
 * - Responsive grid layout (adapts to screen size)
 * - Click-to-expand with overlay modal
 * - Smooth zoom animations via Framer Motion
 * - Keyboard accessible selection
 *
 * ## Planned Features
 * - Carousel mode for flashcard-style learning
 * - Story progression for guided vocabulary
 * - Lightning round quiz mode
 * - Picture-to-word associations
 *
 * ## Usage
 * Pass an array of VocabCardProps to display a list of vocabulary cards.
 */
const meta: Meta<typeof CardList> = {
	title: "Dictionary/CardList",
	component: CardList,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Grid display of vocabulary cards with click-to-expand interaction and responsive layout.",
			},
		},
	},
	argTypes: {
		content: {
			description: "Array of vocabulary card data",
			control: { type: "object" },
		},
	},
	decorators: [
		(Story) => (
			<Box p={4} minH="100vh" bg="gray.50">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof CardList>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default grid view with sample vocabulary
 */
export const Default: Story = {
	args: {
		content: DATA,
	},
}

/**
 * Minimal list with few items
 */
export const FewItems: Story = {
	args: {
		content: data.slice(0, 3),
	},
}

/**
 * Single card display
 */
export const SingleCard: Story = {
	args: {
		content: [data[0]],
	},
}

/**
 * Empty state (no cards)
 */
export const Empty: Story = {
	args: {
		content: [],
	},
}

// =============================================================================
// LANGUAGE COLLECTIONS
// =============================================================================

/**
 * Mixed language vocabulary list
 */
export const MixedLanguages: Story = {
	name: "Mixed Languages",
	args: {
		content: [
			{
				word: "vẹt đuôi dài",
				phonetic: "vɛːkᴰ² ɗuːjᴬ¹ jaːjᴬ²",
				meanings: [
					{
						partOfSpeech: "noun",
						definitions: [{ definition: "macaw", example: "A colorful bird" }],
					},
				],
			},
			{
				word: "感恩",
				meanings: [
					{
						partOfSpeech: "noun",
						definitions: [
							{ definition: "gratitude", example: "感恩节 - Thanksgiving" },
						],
					},
				],
			},
			{
				word: "azafrán",
				phonetic: "/a.θa.ˈfɾan/",
				meanings: [
					{
						partOfSpeech: "sustantivo",
						definitions: [
							{ definition: "saffron", example: "Una especia amarilla" },
						],
					},
				],
			},
			{
				word: "mèo",
				phonetic: "mɛːwᴬ²",
				meanings: [
					{
						partOfSpeech: "noun",
						definitions: [{ definition: "cat", example: "猫" }],
					},
				],
			},
		],
	},
}

/**
 * Vietnamese-focused vocabulary
 */
export const VietnameseCollection: Story = {
	name: "Vietnamese Collection",
	args: {
		content: data.filter(
			(d) => d.phonetic?.includes("ᴬ") || d.phonetic?.includes("ᴰ")
		),
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
		content: DATA,
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
		chromatic: {
			viewports: [320],
		},
	},
}

/**
 * Tablet viewport
 */
export const Tablet: Story = {
	args: {
		content: DATA,
	},
	parameters: {
		viewport: {
			defaultViewport: "tablet",
		},
		chromatic: {
			viewports: [768],
		},
	},
}

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Click to expand a card
 */
export const ClickToExpand: Story = {
	args: {
		content: DATA,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Wait for cards to render
		await new Promise((r) => setTimeout(r, 500))

		// Find and click a card
		const cards = canvas.queryAllByRole("article")
		if (cards.length > 0) {
			await userEvent.click(cards[0])
		}
	},
}

/**
 * Keyboard navigation through cards
 */
export const KeyboardNavigation: Story = {
	args: {
		content: DATA,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Tab through interactive elements
		await userEvent.tab()
		await userEvent.tab()
		await userEvent.tab()
	},
}

// =============================================================================
// PLANNED: CAROUSEL MODE
// =============================================================================

/**
 * Carousel placeholder - Future flashcard-style display
 *
 * Planned features:
 * - Horizontal scroll with snap points
 * - Story progression mode
 * - Lightning round quiz
 * - Picture-to-word associations
 * - Custom progress indicators
 */
export const CarouselPlaceholder: Story = {
	name: "Carousel (Planned)",
	args: {
		content: DATA,
	},
	parameters: {
		docs: {
			description: {
				story: `
**Planned Carousel Features:**
- Story Progression: Guided vocabulary journey
- Lightning Round: Timed flashcard quiz
- Picture Associations: Image-to-word matching
- Scroll Animations: Smooth horizontal navigation
- Custom Indicators: Progress and completion tracking
        `,
			},
		},
	},
}
