import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Box } from "@chakra-ui/react"

import { FannedCardSet } from "./FannedCardSet"
import { WordCard } from "../WordCard"
import type { Word } from "@/types"

const sampleWords: Word[] = [
	{
		id: "fan-1",
		word: "yêu",
		pos: "verb",
		lang_code: "vi",
		etymology_text: null,
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s1",
				word_id: "fan-1",
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
			{ id: "snd1", word_id: "fan-1", ipa: "iəw˧˧", audio: null, tags: null },
		],
		forms: [],
		created_at: "2026-01-24T04:00:00Z",
		updated_at: "2026-01-24T04:00:00Z",
	},
	{
		id: "fan-2",
		word: "phở",
		pos: "noun",
		lang_code: "vi",
		etymology_text: "Possibly from French feu (fire).",
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s2",
				word_id: "fan-2",
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
			{ id: "snd2", word_id: "fan-2", ipa: "fəː˧˩˧", audio: null, tags: null },
		],
		forms: [],
		created_at: "2026-01-24T04:00:00Z",
		updated_at: "2026-01-24T04:00:00Z",
	},
	{
		id: "fan-3",
		word: "cà phê",
		pos: "noun",
		lang_code: "vi",
		etymology_text: "From French café.",
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s3",
				word_id: "fan-3",
				glosses: ["coffee"],
				tags: null,
				display_label: null,
				examples: [
					{
						text: "Cho tôi một ly cà phê.",
						translation: "Give me a cup of coffee.",
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
				id: "snd3",
				word_id: "fan-3",
				ipa: "kaː˨˩ fe˧˧",
				audio: null,
				tags: null,
			},
		],
		forms: [],
		created_at: "2026-01-24T04:00:00Z",
		updated_at: "2026-01-24T04:00:00Z",
	},
	{
		id: "fan-4",
		word: "ăn",
		pos: "verb",
		lang_code: "vi",
		etymology_text: null,
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s4",
				word_id: "fan-4",
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
	},
	{
		id: "fan-5",
		word: "ngủ",
		pos: "verb",
		lang_code: "vi",
		etymology_text: null,
		head_templates: null,
		etymology_templates: null,
		senses: [
			{
				id: "s5",
				word_id: "fan-5",
				glosses: ["to sleep"],
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
	},
]

const createCardElements = (words: Word[], count?: number) =>
	(count ? words.slice(0, count) : words).map((word) => (
		<Box key={word.id} maxW="350px">
			<WordCard word={word} />
		</Box>
	))

/**
 * # FannedCardSet
 *
 * An animated card display that fans out cards in a visually appealing stack.
 * Uses real WordCard components with API-shaped data.
 *
 * ## Features
 * - Fanned card layout with hover/click interactions
 * - Configurable spread angle and spacing
 * - Touch-friendly for mobile
 */
const meta: Meta<typeof FannedCardSet> = {
	title: "Dictionary/FannedCardSet",
	component: FannedCardSet,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Animated fanned card display for showcasing vocabulary collections.",
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

/**
 * Default fanned card display with 5 word cards
 */
export const Default: Story = {
	args: {
		cards: createCardElements(sampleWords),
	},
}

/**
 * Small set with 3 cards
 */
export const SmallSet: Story = {
	args: {
		cards: createCardElements(sampleWords, 3),
	},
}

/**
 * Single card (no fanning)
 */
export const SingleCard: Story = {
	args: {
		cards: createCardElements(sampleWords, 1),
	},
}

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	args: { ...Default.args },
	parameters: {
		viewport: { defaultViewport: "mobile1" },
	},
}

/**
 * Tablet viewport
 */
export const Tablet: Story = {
	args: { ...Default.args },
	parameters: {
		viewport: { defaultViewport: "tablet" },
	},
}

/**
 * Hover to reveal cards
 */
export const HoverInteraction: Story = {
	args: { ...Default.args },
}

/**
 * Click to select a card
 */
export const ClickToSelect: Story = {
	args: { ...Default.args },
}
