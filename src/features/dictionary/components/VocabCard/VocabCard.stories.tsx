import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { DefinitionsList, VocabCard, VocabContent, Word } from "./VocabCard"
import { CardList } from "./CardList"
import { MOCK_CARD_INFO } from "../../api/mockData"
import { theme } from "../../../../styles/theme"
import { Divider, Stack, Container, Group, Flex } from "@mantine/core"
import { nanoid } from "nanoid"

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
		expanded: true,
		...data[0],
	},
}
export const Empty: Story = {
	args: {
		label: "VocabCard",
		...data[10],
	},
}

export const Headword: Story = {
	args: {
		label: "VocabCard",
		// ...data[3],
	},
	render: () => {
		return data.map((item, index) => {
			const { word, phonetic } = item
			return (
				<>
					<Stack bg="lightgray" border="2px dashed #555555">
						<Word word={word} phonetic={phonetic} />
					</Stack>
					<Divider my={"md"} />
				</>
			)
		})
	},
}

export const Meaning: Story = {
	args: {
		label: "VocabCard",
		...data[4],
	},
	render: () => {
		return (
			<>
				{data.map((item, index) => {
					const { meanings } = item
					return (
						<Container bg="lightgray">
							<VocabContent meanings={meanings} expanded />
						</Container>
					)
				})}
			</>
		)
	},
}

export const MeaningVariant: Story = {
	args: {
		label: "VocabCard",
		...data[2],
	},
	render: () => {
		return (
			<>
				{data.map((item, index) => {
					const { meanings } = item
					return (
						<Container bg="lightgray">
							<VocabContent variant meanings={meanings} expanded />
						</Container>
					)
				})}
			</>
		)
	},
}

export default meta
