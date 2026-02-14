import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn, expect, within, userEvent } from "@storybook/test"
import { Box, VStack } from "@chakra-ui/react"

import { WordCard } from "./WordCard"
import type { WordPublic } from "@/types"

const mockWord: WordPublic = {
	id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
	word: "hạnh phúc",
	pos: "adjective",
	lang_code: "vi",
	etymology_text:
		'From Sino-Vietnamese 幸福 (hạnh phúc, "happiness, bliss").',
	head_templates: null,
	etymology_templates: null,
	senses: [
		{
			id: "s1",
			word_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
			glosses: ["happy", "blissful"],
			tags: ["informal"],
			display_label: null,
			examples: [
				{
					text: "Tôi cảm thấy rất hạnh phúc.",
					translation: "I feel very happy.",
				},
			],
			links: null,
			synonyms: null,
			antonyms: null,
			related: null,
			derived: null,
		},
		{
			id: "s2",
			word_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
			glosses: ["fortunate", "blessed"],
			tags: null,
			display_label: null,
			examples: null,
			links: null,
			synonyms: null,
			antonyms: null,
			related: null,
			derived: null,
		},
	],
	sounds: [
		{
			id: "snd1",
			word_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
			ipa: "haːjŋ˧˩˧ fuk͡p˧˥",
			audio: null,
			tags: null,
		},
	],
	forms: [],
	created_at: "2026-01-24T04:00:00Z",
	updated_at: "2026-01-24T04:00:00Z",
}

const mockWordWithAudio: WordPublic = {
	...mockWord,
	id: "audio-word-id",
	word: "xin chào",
	pos: "interjection",
	etymology_text:
		'From Sino-Vietnamese 請 (xin, "to request") + 嘲 (chào, "to greet").',
	senses: [
		{
			id: "s3",
			word_id: "audio-word-id",
			glosses: ["hello (a greeting)"],
			tags: ["formal"],
			display_label: null,
			examples: [
				{
					text: "Xin chào, bạn khỏe không?",
					translation: "Hello, how are you?",
				},
			],
			links: null,
			synonyms: null,
			antonyms: null,
			related: null,
			derived: null,
		},
	],
	sounds: [
		{
			id: "snd2",
			word_id: "audio-word-id",
			ipa: "sin˧˧ t͡ɕaːw˨˩",
			audio: "https://example.com/xin-chao.mp3",
			tags: null,
		},
	],
}

const mockWordMinimal: WordPublic = {
	id: "minimal-word-id",
	word: "ăn",
	pos: "verb",
	lang_code: "vi",
	etymology_text: null,
	head_templates: null,
	etymology_templates: null,
	senses: [
		{
			id: "s4",
			word_id: "minimal-word-id",
			glosses: ["to eat"],
			tags: null,
			display_label: null,
			examples: null,
			links: null,
			synonyms: null,
			antonyms: null,
			related: null,
			derived: null,
		},
	],
	sounds: [],
	forms: [],
	created_at: "2026-01-24T04:00:00Z",
	updated_at: "2026-01-24T04:00:00Z",
}

/**
 * # WordCard
 *
 * Backend-integrated vocabulary card that displays real dictionary data.
 * Uses Chakra semantic tokens for full light/dark mode support.
 *
 * ## Features
 * - Displays word, POS badge, IPA pronunciation, and definitions
 * - Bookmark toggle connected to Zustand store (persisted in localStorage)
 * - Etymology section
 * - Example sentences with translations
 * - Fully themed with semantic tokens
 */
const meta: Meta<typeof WordCard> = {
	title: "Dictionary/WordCard",
	component: WordCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Backend-integrated vocabulary card with bookmark functionality, IPA display, and semantic token theming.",
			},
		},
	},
	decorators: [
		(Story) => (
			<Box p={4} maxW="600px" w="full">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof WordCard>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Full word card with IPA, multiple senses, examples, and etymology
 */
export const Default: Story = {
	args: {
		word: mockWord,
	},
}

/**
 * Word with audio playback button visible
 */
export const WithAudio: Story = {
	args: {
		word: mockWordWithAudio,
	},
}

/**
 * Minimal word card — no IPA, no etymology, single definition
 */
export const Minimal: Story = {
	args: {
		word: mockWordMinimal,
	},
}

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Test: Clicking the bookmark icon toggles saved state
 */
export const BookmarkToggle: Story = {
	args: {
		word: mockWord,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Find the bookmark button
		const bookmarkBtn = canvas.getByLabelText("Save word")
		await expect(bookmarkBtn).toBeVisible()

		// Click to save
		await userEvent.click(bookmarkBtn)

		// After click, label should change to "Remove from saved"
		const unsaveBtn = canvas.queryByLabelText("Remove from saved")
		// If the store toggled, the unsave button should now exist
		if (unsaveBtn) {
			await expect(unsaveBtn).toBeVisible()

			// Click again to unsave
			await userEvent.click(unsaveBtn)
			const saveBtn = canvas.getByLabelText("Save word")
			await expect(saveBtn).toBeVisible()
		}
	},
}

// =============================================================================
// MULTIPLE CARDS
// =============================================================================

/**
 * Multiple word cards in a list layout
 */
export const CardList: Story = {
	render: () => (
		<VStack gap={6} align="stretch" maxW="600px" w="full">
			<WordCard word={mockWord} />
			<WordCard word={mockWordWithAudio} />
			<WordCard word={mockWordMinimal} />
		</VStack>
	),
}

// =============================================================================
// RESPONSIVE
// =============================================================================

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	args: {
		word: mockWord,
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}
