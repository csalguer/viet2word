import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"


import { FannedCardSet } from "./FannedCardSet"
import { MOCK_CARD_INFO } from "@/test/mockData"
import { VocabCard } from "@/components/dictionary"
import { AnimatePresence } from "framer-motion"
import { withZoom } from "@/styles/animations"
import { Box } from "@chakra-ui/react"

/**
 * # FannedCardSet
 *
 * An animated card display that fans out cards in a visually appealing stack.
 * Used for showcasing vocabulary collections with smooth transitions.
 *
 * ## Features
 * - Fanned card layout with hover/click interactions
 * - Smooth Framer Motion animations
 * - Configurable spread angle and spacing
 * - Touch-friendly for mobile
 *
 * ## Use Cases
 * - Featured vocabulary showcase
 * - Lesson preview cards
 * - Collection previews
 */
const meta: Meta<typeof FannedCardSet> = {
	title: "Cards/FannedCardSet",
	component: FannedCardSet,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Animated fanned card display for showcasing vocabulary collections with smooth transitions.",
			},
		},
	},
	decorators: [
		(Story) => (
			<Box
				p={8}
				minH="400px"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof FannedCardSet>

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

const createCardElements = (data: typeof MOCK_CARD_INFO.data, count = 5) =>
	data.slice(0, count).map((info, index) => (
		<AnimatePresence key={index}>
			{withZoom(
				<Box>
					<VocabCard
						word={info.word}
						meanings={info.meanings}
						phonetic={info.phonetic}
						size="sm"
						expanded
					/>
				</Box>,
				1.2
			)}
		</AnimatePresence>
	))

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default fanned card display with sample vocabulary
 */
export const Default: Story = {
	args: {
		cards: createCardElements(MOCK_CARD_INFO.data),
	},
}

/**
 * Small set with 3 cards
 */
export const SmallSet: Story = {
	args: {
		cards: createCardElements(MOCK_CARD_INFO.data, 3),
	},
}

/**
 * Large set with 8 cards
 */
export const LargeSet: Story = {
	args: {
		cards: createCardElements(MOCK_CARD_INFO.data, 8),
	},
}

/**
 * Single card (no fanning)
 */
export const SingleCard: Story = {
	args: {
		cards: createCardElements(MOCK_CARD_INFO.data, 1),
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
		...Default.args,
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
		...Default.args,
	},
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
 * Hover to reveal cards
 */
export const HoverInteraction: Story = {
	args: {
		...Default.args,
	},
}

/**
 * Click to select a card
 */
export const ClickToSelect: Story = {
	args: {
		...Default.args,
	},
}

// =============================================================================
// ANIMATION VARIANTS (Documentation)
// =============================================================================

/**
 * Animation configuration examples
 */
export const AnimationDocs: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		docs: {
			description: {
				story: `
## Animation Configuration

The FannedCardSet uses Framer Motion for smooth animations:

\`\`\`tsx
// Zoom wrapper
withZoom(<VocabCard {...props} />, 1.2)

// Fan spread configuration
fanAngle: 15  // degrees between cards
hoverLift: 20 // pixels to lift on hover
\`\`\`
        `,
			},
		},
	},
}
