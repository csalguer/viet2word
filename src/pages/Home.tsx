import React, { useState } from "react"
import { Box, Container, Heading, VStack, Text, Button } from "@chakra-ui/react"
import { FannedCardSet } from "../components/card/fanned-card-set/FannedCardSet"
import { TabbedInterface } from "../components/TabbedInterface"
import { CardList } from "../components/CardList"
import { DictionaryEntry } from "../components/landing/DictionaryEntry"
import { PaletteGuide } from "../components/landing/PaletteGuide"
import { ToggleSwitch } from "../components/landing/ToggleSwitch"
import { LayoutMode } from "../components/landing/types"
import DemoOne from "../components/MorphingCardStackDemo"

// Mock Data
const cardItems = [
	{ title: "Card 1", description: "Description for card 1" },
	{ title: "Card 2", description: "Description for card 2" },
	{ title: "Card 3", description: "Description for card 3" },
]

const tabItems = [
	{ label: "Tab 1", content: <Box p={4}>Content for Tab 1</Box> },
	{ label: "Tab 2", content: <Box p={4}>Content for Tab 2</Box> },
]

const wordData = {
	word: "Serendipity",
	pronunciation: "/ˌser.ənˈdɪp.ə.ti/",
	etymology: 'From Persian fairy tale "The Three Princes of Serendip"',
	definitions: [
		{
			id: "1",
			partOfSpeech: "noun",
			meaning:
				"The occurrence and development of events by chance in a happy or beneficial way.",
			example: "The discovery of penicillin was a serendipity.",
			meta: ["literary"],
			synonyms: ["chance", "fate", "luck"],
			antonyms: ["misfortune"],
		},
	],
}

const fannedCards = [
	<Box
		key="1"
		bg="white"
		p={4}
		shadow="md"
		rounded="md"
		w="200px"
		h="300px"
		border="1px solid"
		borderColor="gray.200"
	>
		Card A
	</Box>,
	<Box
		key="2"
		bg="white"
		p={4}
		shadow="md"
		rounded="md"
		w="200px"
		h="300px"
		border="1px solid"
		borderColor="gray.200"
	>
		Card B
	</Box>,
	<Box
		key="3"
		bg="white"
		p={4}
		shadow="md"
		rounded="md"
		w="200px"
		h="300px"
		border="1px solid"
		borderColor="gray.200"
	>
		Card C
	</Box>,
]

export const Home = () => {
	const [mode, setMode] = useState<LayoutMode>("editorial")

	return (
		<Container maxW="container.xl" py={10}>
			<VStack gap={10} align="stretch">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Heading>VLT Landing Page</Heading>
				</Box>

				<Box>
					<Heading size="md" mb={4}>
						Dictionary Entry
					</Heading>
					<ToggleSwitch mode={mode} onChange={setMode} />
					<Box mt={4}>
						<DictionaryEntry mode={mode} data={wordData} />
					</Box>
				</Box>

				<Box>
					<Heading size="md" mb={4}>
						Fanned Card Set
					</Heading>
					<Box h="400px" position="relative">
						<FannedCardSet cards={fannedCards} />
					</Box>
				</Box>

				<Box>
					<Heading size="md" mb={4}>
						Tabbed Interface
					</Heading>
					<TabbedInterface items={tabItems} />
				</Box>

				<Box>
					<Heading size="md" mb={4}>
						Card List
					</Heading>
					<CardList items={cardItems} />
				</Box>

				<Box>
					<Heading size="md" mb={4}>
						Palette Guide
					</Heading>
					<PaletteGuide />
				</Box>

				<Box>
					<Heading size="md" mb={4}>
						Morphing Card Stack
					</Heading>
					<DemoOne />
				</Box>
			</VStack>
		</Container>
	)
}
export default Home
