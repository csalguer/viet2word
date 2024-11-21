import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { MantineProvider } from "@mantine/core"

import InfoCard from "./InfoCard"
import { MOCK_CARD_INFO } from "../../api/mockData"
import { theme } from "../../../../styles/theme"
import { AppConfig } from "../../../../config"

// import { withPalette } from "../../../../styles/PaletteContext"

const meta: Meta<typeof InfoCard> = {
	component: InfoCard,
	decorators: [
		(Story, { parameters }) => {
			const { word, phonetic, meanings } = parameters
			return (
				<AppConfig>
					<Story word={word} phonetic={phonetic} meanings={meanings} />
				</AppConfig>
			)
		},
	],
}

export default meta

type Story = StoryObj<typeof InfoCard>

// TODO: Multiple examples and how to render
// TODO: Styling for origin of the definition (jargon, industry, study/field) // keep consistent per language
// TODO: Phonetic vs IPA
// TODO: Syllable/written word-break * notation
export const Primary: Story = {
	args: {
		primary: true,
		label: "InfoCard",
		word: "junction",
		phonetic: "jəNG(k)SHən",
		meanings: [
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition: "a point where two or more things are joined",
						example: ": the junction of the two rivers.",
					},
					{
						definition:
							"Electronics a region of transition in a semiconductor between a part where conduction is mainly by electrons and a part where it is mainly by holes.",
						example: ": the junction of the two rivers.",
					},
					{
						definition: "the action or fact of joining or being joined",
						example:
							"the vena cava is formed by the junction of three veins | the junction of two roundels produces a triangular space",
					},
				],
			},
		],
	},
}
export const Empty: Story = {
	args: {
		label: "InfoCard",
		word: "~",
		phonetic: " ",
		meanings: [
			{
				partOfSpeech: "unknown",
				definitions: [],
			},
		],
	},
}

export const Word: Story = {
	args: {
		label: "InfoCard",
		word: "Conch",
		phonetic: "känCH, käNGk",
	},
}


export const Meaning: Story = {
	args: {
		label: "InfoCard",
		word: "Conch",
		meanings: [
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition: "Mollusk",
						example:
							"A plate is plate dem	countably plural in Patois, a famous dish of which is Conch Salad.",
					},
				],
			},
		],
	},
}
