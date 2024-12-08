import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { CardList } from "./CardList"
import { DATA, MOCK_CARD_INFO } from "../../api/mockData"
import { theme } from "../../../../styles/theme"

const meta: Meta<typeof CardList> = {
	component: CardList,
	decorators: [],
}

const { data } = MOCK_CARD_INFO

type Story = StoryObj<typeof CardList>

// TODO: Multiple examples and how to render
// TODO: Styling for origin of the definition (jargon, industry, study/field) // keep consistent per language
// TODO: Phonetic vs IPA
// TODO: Syllable/written word-break * notation
export const Primary: Story = {
	args: {
		primary: true,
		label: "CardList",
		content: {
			data: [...DATA],
		},
	},
}

export const VocabList: VocabListStory = {
	args: {
		label: "VocabList",
		content: {
			data: [...DATA],
		},
	},
}

export const Carousel: Story = {
	args: {
		label: "CarouselList",
		...Primary.args,
	},
}
export const Static: Story = {
	args: {
		label: "Static",
		...Primary.args,
	},
}
export const Interactable: Story = {
	args: {
		label: "Interactable",
		...Primary.args,
	},
}

export default meta
