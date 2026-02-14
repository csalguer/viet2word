import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"
import { http, HttpResponse } from "msw"

import { SavedVocab } from "./SavedVocab"
import type { WordPublic } from "@/types"
import { useSavedVocabStore } from "@/stores/savedVocab"

const mockWords: WordPublic[] = [
	{
		id: "word-1",
		word: "yêu",
		pos: "verb",
		lang_code: "vi",
		etymology_text: null,
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s1",
				word_id: "word-1",
				glosses: ["to love"],
				tags: null,
				display_label: null,
				examples: [{ text: "Anh yêu em.", translation: "I love you." }],
				links: null,
				synonyms: null,
				antonyms: null,
				related: null,
				derived: null,
			},
		],
		sounds: [
			{ id: "snd1", word_id: "word-1", ipa: "iəw˧˧", audio: null, tags: null },
		],
		forms: [],
		created_at: "2026-01-24T04:00:00Z",
		updated_at: "2026-01-24T04:00:00Z",
	},
	{
		id: "word-2",
		word: "phở",
		pos: "noun",
		lang_code: "vi",
		etymology_text: "Possibly from French feu (fire).",
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s2",
				word_id: "word-2",
				glosses: ["pho; a Vietnamese noodle soup"],
				tags: ["culinary"],
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
			{ id: "snd2", word_id: "word-2", ipa: "fəː˧˩˧", audio: null, tags: null },
		],
		forms: [],
		created_at: "2026-01-24T04:00:00Z",
		updated_at: "2026-01-24T04:00:00Z",
	},
]

/**
 * # SavedVocab (Page)
 *
 * The Saved Vocabulary page displays words the user has bookmarked.
 * Connected to Zustand store (localStorage) and fetches real word data via API.
 *
 * ## States
 * - Empty: No words saved
 * - With Data: Displays WordCard components for each saved word
 * - Loading: Spinner while fetching
 * - Error: Error message when backend is unreachable
 */
const meta: Meta<typeof SavedVocab> = {
	title: "Pages/SavedVocab",
	component: SavedVocab,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Page for displaying user's saved vocabulary words, fetched from the backend by stored IDs.",
			},
		},
	},
	decorators: [
		(Story) => (
			<Box minH="80vh" bg="canvas">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof SavedVocab>

// =============================================================================
// STATES
// =============================================================================

/**
 * Empty state — no saved words
 */
export const Empty: Story = {
	decorators: [
		(Story) => {
			// Reset store to empty before rendering
			useSavedVocabStore.setState({ savedWords: [] })
			return <Story />
		},
	],
}

/**
 * With saved words — mocks the API responses
 */
export const WithSavedWords: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words/word-1", () =>
					HttpResponse.json(mockWords[0])
				),
				http.get("/api/v1/words/word-2", () =>
					HttpResponse.json(mockWords[1])
				),
			],
		},
	},
	decorators: [
		(Story) => {
			useSavedVocabStore.setState({ savedWords: ["word-1", "word-2"] })
			return <Story />
		},
	],
}

/**
 * Error state — backend unreachable
 */
export const ErrorState: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words/*", () =>
					new HttpResponse(null, { status: 500 })
				),
			],
		},
	},
	decorators: [
		(Story) => {
			useSavedVocabStore.setState({ savedWords: ["word-1"] })
			return <Story />
		},
	],
}

// =============================================================================
// RESPONSIVE
// =============================================================================

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	...WithSavedWords,
	parameters: {
		...WithSavedWords.parameters,
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}
