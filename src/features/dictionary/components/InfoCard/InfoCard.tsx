/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Card,
	Text,
	Center,
	Group,
	Container,
	Box,
	Badge,
	SimpleGrid,
	Stack,
	Space,
	Skeleton,
	Spoiler,
	Flex,
	Modal,
	Dialog,
	em,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { nanoid } from "nanoid"
import { useCallback, useEffect, useState } from "react"
import palette from "../../../../styles/Palette"

import {
	InfoCardProps,
	Cards,
	WordProps,
	MeaningProps,
	VocabCardProps,
} from "./types"
import {
	withFadeOut,
	withGreyedSelection,
	withZoom,
} from "../../../animation/hooks/index"

export const CardList = ({ content }: Cards[]): ReactElement => {
	// TODO: Implement logic to render multiple InfoCard components based on the content prop.

	const [selectedId, setSelectedId] = useState(null)
	const [cards, setCards] = useState([])
	const [buttons, setButtons] = useState([])
	const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

	const createCards = useCallback(
		(item, index) => {
			// console.log(item.word)
			const cardElement = (
				<Center
					w={{ base: 300, sm: "25vw", md: "30vw" }}
					key={nanoid(6)}
					onClick={() => {
						setSelectedId(null)
					}}
				>
					{withZoom(
						<VocabCard
							word={item.word}
							phonetic={""}
							expanded
							meanings={item.meanings}
						/>,
						isMobile ? 1.1 : 2.0
					)}
				</Center>
			)
			return <AnimatePresence key={nanoid(6)}>{cardElement}</AnimatePresence>
		},
		[content, selectedId]
	)
	const createVocabButtons = useCallback(
		(item, index) => {
			const elem = (
				<Center
					w={{ base: 300, sm: "25vw", lg: "30vw" }}
					onClick={() => {
						setSelectedId(index)
					}}
					key={nanoid(6)}
				>
					{withFadeOut(
						<VocabCard
							key={nanoid(6)}
							word={item.word}
							phonetic={""}
							meanings={item.meanings}
							expanded={false}
						/>
					)}
				</Center>
			)
			return <AnimatePresence key={nanoid(6)}>{elem}</AnimatePresence>
		},
		[content, selectedId]
	)

	const getListStyle = useCallback(() => {
		return {
			filter: selectedId != null ? "blur(3.2px)" : "none",
			color: selectedId != null ? "#3262c225" : "transparent",
		}
	}, [selectedId, isMobile])

	useEffect(() => {
		// If no content is provided, return an empty div.
		setCards(content?.data?.map(createCards))
		setButtons(content?.data?.map(createVocabButtons))
	}, [content])

	return (
		<>
			<Center overflow={"scroll"}>
				{selectedId != null && (
					<Center
						style={{ zIndex: 1 }}
						p="md"
						onClick={() => {
							setSelectedId(null)
						}}
						w={{ base: 300, sm: "25vw", md: "30vw" }}
						pos={"absolute"}
						opacity={selectedId != null ? 1 : 0}
					>
						{cards[selectedId]}
					</Center>
				)}

				<Flex
					direction="row"
					justify="center"
					// align={"center"}
					gap="1em"
					wrap={"wrap"}
					style={getListStyle()}
				>
					{buttons.map((elem) => {
						return <div key={nanoid(6)}>{elem}</div>
					})}
				</Flex>
			</Center>
		</>
	)
}

export const Word = ({ word, partOfSpeech, isRTL = false }: WordProps) => {
	return (
		<>
			<Flex
				// TODO: Add RTL support alongside i18n support fixes with t() hook (useInternationalization?)
				// direction={isRTL ? "row" : "row-reverse"}
				justify="space-between"
				mt="md"
				mb="xs"
			>
				<Text size="xl" fw={700}>
					{word}
				</Text>
				{partOfSpeech && <Badge>{partOfSpeech}</Badge>}
			</Flex>
		</>
	)
}
export const Meaning = ({ meanings, onClick }: MeaningProps) => {
	return (
		<Space h="100%" onClick={onClick}>
			<Stack justify="space-between" mt="md" mb="xs">
				{meanings?.length &&
					meanings?.map((item, index) => {
						const { definitions, example } = item
						return definitions?.map((def, index) => {
							return (
								<>
									<Group>
										-
										<Stack key={nanoid(6)} mb="xs">
											<Text fw={700} size="md">
												{def.definition}
											</Text>
											<Text size="xs">{def.example}</Text>
										</Stack>
									</Group>
								</>
							)
						})
					})}
			</Stack>
		</Space>
	)
}

// TODO: Make small, med, and larger, separate button-like
// TODO: Account for inner clickable + draggable on outer
// TODO: Pass through "as" prop

export function VocabCard({
	word,
	phonetic,
	meanings,
	vertical = false,
	size,
	visible = true,
	expanded = true,
	onClick = null,
	handle,
}: VocabCardProps) {
	const [isVisible, toggleVisibility] = useState<boolean>(visible)
	const [isExpanded, toggleExpanded] = useState<boolean>(expanded)

	// const handleVisibilityToggle = useCallback(() => {
	// 	toggleVisibility(!isVisible)
	// }, [isVisible])

	const handleExpandedToggle = useCallback(() => {
		toggleExpanded(!isExpanded)
	}, [isExpanded])

	return (
		<Card
			shadow="sm"
			padding="lg"
			h="auto"
			mah={{ base: 300, sm: "100%", md: "25vh" }}
			mih={{ base: 300, sm: "100%", md: "20vh" }}
			w={{ base: 300, sm: "100%", md: "25vw" }}
			radius="md"
			withBorder
		>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				<Word word={word} partOfSpeech={meanings[0]?.partOfSpeech} />
				{isExpanded ? (
					<Meaning meanings={meanings} />
				) : (
					<Skeleton size={"lg"} />
				)}
			</Stack>
		</Card>
	)
}

const DictionaryItem = () => {}

export const EmptyCard = () => {
	return (
		<>
			<VocabCard word={"  "} meanings={[]} />
		</>
	)
}

export default VocabCard
