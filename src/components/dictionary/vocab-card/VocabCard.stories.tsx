import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { DefinitionsList, VocabCard, VocabContent, Word } from "./VocabCard"
import { CardList } from "../card-list"
import { MOCK_CARD_INFO } from "../../../lib/mockData"
import { Separator, Stack, Container, HStack, Flex } from "@chakra-ui/react"
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
		expanded: true,
		...data[0],
	},
}
export const Empty: Story = {
	args: {
		...data[10],
	},
}

export const Headword: Story = {
	args: {
		// ...data[3],
	},
	render: () => {
		return (
			<>
				{data.map((item, index) => {
					const { word, phonetic } = item
					return (
						<React.Fragment key={index}>
							<Stack bg="white">
								<Word word={word} phonetic={phonetic} />
							</Stack>
							<Separator my={"4"} />
						</React.Fragment>
					)
				})}
			</>
		)
	},
}

export const Meaning: Story = {
	args: {
		...data[4],
	},
	render: () => {
		return (
			<>
				{data.map((item, index) => {
					const { meanings } = item
					return (
						<Container bg="white" key={index}>
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
		...data[2],
	},
	render: () => {
		return (
			<>
				{data.map((item, index) => {
					const { meanings } = item
					return (
						<Container bg="white" key={index}>
							<VocabContent variant meanings={meanings} expanded />
						</Container>
					)
				})}
			</>
		)
	},
}

export default meta
