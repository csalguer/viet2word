import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FannedCardSet } from "./FannedCardSet"
import { MOCK_CARD_INFO } from "@/lib/mockData"
import { VocabCard } from "@/components/dictionary"
import { AnimatePresence } from "framer-motion"
import { withZoom } from "@/lib/animations"
import { Box } from "@chakra-ui/react"

const meta: Meta<typeof FannedCardSet> = {
	component: FannedCardSet,
}

export default meta

type Story = StoryObj<typeof FannedCardSet>

export const Basic: Story = {
	args: {
		cards: MOCK_CARD_INFO.data
			.map((info) => (
				<VocabCard
					word={info.word}
					meanings={info.meanings}
					phonetic={info.phonetic}
					size="sm"
					expanded
				/>
			))
			.map((card, index) => (
				<AnimatePresence>
					{withZoom(<Box key={index}>{card}</Box>, 1.2)}
				</AnimatePresence>
			)),
	},
}
