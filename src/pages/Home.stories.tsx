import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"
import { http, HttpResponse } from "msw"

import { Home } from "./Home"
import type { WordPublic, PaginatedResponse } from "@/types"

const mockWordOfDay: PaginatedResponse<WordPublic> = {
	data: [
		{
			id: "wotd-1",
			word: "hạnh phúc",
			pos: "adjective",
			lang_code: "vi",
			etymology_text: 'From Sino-Vietnamese 幸福 (hạnh phúc).',
			head_templates: null,
			etymology_templates: null,
			senses: [
				{
					id: "s1",
					word_id: "wotd-1",
					glosses: ["happy", "blissful", "blessed"],
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
					word_id: "wotd-1",
					ipa: "haːjŋ˧˩˧ fuk͡p˧˥",
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
	limit: 1,
	total_pages: 1,
}

/**
 * # Home (Page)
 *
 * Landing page with hero section, search bar, Word of the Day, and trending links.
 * Fully themed with semantic tokens.
 */
const meta: Meta<typeof Home> = {
	title: "Pages/Home",
	component: Home,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => (
			<Box minH="100vh">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof Home>

/**
 * Default — Word of the Day loaded
 */
export const Default: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words", () =>
					HttpResponse.json(mockWordOfDay)
				),
			],
		},
	},
}

/**
 * Loading — Word of the Day still fetching
 */
export const Loading: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get("/api/v1/words", async () => {
					await new Promise((r) => setTimeout(r, 999999))
					return HttpResponse.json(mockWordOfDay)
				}),
			],
		},
	},
}

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	...Default,
	parameters: {
		...Default.parameters,
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}
