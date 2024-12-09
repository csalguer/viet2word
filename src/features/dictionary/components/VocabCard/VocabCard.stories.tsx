import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { VocabCard } from "./VocabCard"
import { CardList } from "./CardList"
import { MOCK_CARD_INFO } from "../../api/mockData"
import { theme } from "../../../../styles/theme"

const meta: Meta<typeof VocabCard> = {
	component: VocabCard,
	decorators: [],
}
const metaList: Meta<typeof CardList> = {
	component: CardList,
	decorators: [],
}

const { data } = MOCK_CARD_INFO
type Story = StoryObj<typeof VocabCard>

// TODO: Multiple examples and how to render
// TODO: Styling for origin of the definition (jargon, industry, study/field) // keep consistent per language
// TODO: Phonetic vs IPA
// TODO: Syllable/written word-break * notation
export const Primary: Story = {
	args: {
		primary: true,
		label: "VocabCard",
		...data[0],
		expanded: true,
	},
}
export const Empty: Story = {
	args: {
		label: "VocabCard",
		...data[10],
	},
}

export const Word: Story = {
	args: {
		label: "VocabCard",
		...data[3],
	},
}

export const Meaning: Story = {
	args: {
		label: "VocabCard",
		...data[4],
	},
}
export const MeaningVariant: Story = {
	args: {
		label: "VocabCard",
		...data[2],
	},
}
export default meta
