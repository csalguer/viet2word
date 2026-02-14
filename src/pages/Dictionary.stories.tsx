import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"
import { http, HttpResponse } from "msw"

import { Dictionary } from "./Dictionary"
import type { WordPublic, PaginatedResponse } from "@/types"

const mockResults: PaginatedResponse<WordPublic> = {
	data: [
		{
			id: "word-1",
			word: "được",
			pos: "verb",
			lang_code: "vi",
			etymology_text: "From Proto-Vietic *dɨəkᴰ.",
			head_templates: null,
			etymology_templates: null,
			senses: [
				{
					id: "s1",
					word_id: "word-1",
					glosses: ["to obtain", "to get", "can, to be able to"],
					tags: null,
					display_label: null,
					examples: [
						{
							text: "Tôi được mời đi ăn tối.",
							translation: "I was invited to dinner.",
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
					id: "snd1",
					word_id: "word-1",
					ipa: "ɗɨːk˧˥",
					audio: null,
					tags: null,
				},
			],
			forms: [],
			created_at: "2026-01-24T04:00:00Z",
			updated_at: "2026-01-24T04:00:00Z",
		},
	],
	count: 1,
	page: 1,
	limit: 20,
	total_pages: 1,
}

const emptyResults: PaginatedResponse<WordPublic> = {
	data: [],
	count: 0,
	page: 1,
	limit: 20,
	total_pages: 0,
}

/**
 * # Dictionary (Page)
 *
 * Main dictionary search results page. Displays word cards based on search query.
 *
 * ## States
 * - Default: No query, empty view
 * - With Results: Matching word cards displayed
 * - Empty Results: "No definitions found" message
 * - Error: Backend connection failure
 * - Loading: Spinner
 */
const meta: Meta<typeof Dictionary> = {
	title: "Pages/Dictionary",
	component: Dictionary,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
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
type Story = StoryObj<typeof Dictionary>

/**
 * Default — no search query
 */
export const Default: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words", () =>
					HttpResponse.json(emptyResults)
				),
			],
		},
	},
}

/**
 * With search results
 */
export const WithResults: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words", () =>
					HttpResponse.json(mockResults)
				),
			],
		},
	},
}

/**
 * Empty results for a valid query
 */
export const NoResults: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words", () =>
					HttpResponse.json(emptyResults)
				),
			],
		},
	},
}

/**
 * Error state
 */
export const ErrorState: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words", () =>
					new HttpResponse(null, { status: 500 })
				),
			],
		},
	},
}

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	...WithResults,
	parameters: {
		...WithResults.parameters,
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}
