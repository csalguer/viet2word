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
import { Carousel } from "@mantine/carousel"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { nanoid } from "nanoid"
import { useCallback, useEffect, useState } from "react"
import palette from "../../../../styles/Palette"
import { VocabCard } from "./VocabCard"
import {
	InfoCardProps,
	Cards,
	WordProps,
	DefinitionsListProps,
	VocabCardProps,
} from "./types"
import {
	withFadeOut,
	withGreyedSelection,
	withZoom,
} from "../../../animation/hooks/index"

interface APIReturn<T> {
	data?: T | T[] | Record<string, T>
	error: {
		status: number
		message: string
		time: Date
	}
}
// type CardData = typeof Cards
type CardData = APIReturn<CardData>
export const CardList = ({ content }: CardData): ReactElement => {
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
					{buttons?.map((elem) => {
						return <div key={nanoid(6)}>{elem}</div>
					})}
				</Flex>
			</Center>
		</>
	)
}

interface CarouselListProps extends CardData {}

export const CarouselList = ({ content }: CarouselListProps): ReactElement => {
	return (
		<>
			<Group>
				<Carousel></Carousel>
			</Group>
		</>
	)
}
