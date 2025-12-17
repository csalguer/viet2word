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
	UnstyledButton,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Carousel } from "@mantine/carousel"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { nanoid } from "nanoid"
import { useCallback, useEffect, useState, ReactElement } from "react"
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

interface CardListProps {
    content: VocabCardProps[]
}

export const CardList = ({ content }: CardListProps): ReactElement => {
	// TODO: Implement logic to render multiple InfoCard components based on the content prop.
	const [selectedId, setSelectedId] = useState(null)
	const [cards, setCards] = useState<ReactElement[]>([])
	const [buttons, setButtons] = useState<ReactElement[]>([])
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
							phonetic={item?.phonetic}
							expanded={true}
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
							expanded={selectedId == index ? true : false}
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
			// color: selectedId != null ? "#3262c225" : "transparent",
		}
	}, [selectedId, isMobile])

	useEffect(() => {
		// If no content is provided, return an empty div.
		setCards(content?.map(createCards))
		setButtons(content?.map(createVocabButtons))
	}, [content])

	return (
		<>
			<Center style={{ overflow: "scroll" }}>
				{selectedId != null && (
					<Center
						style={{ zIndex: 1 }}
						p="md"
						onClick={() => {
							setSelectedId(null)
						}}
						pos={"absolute"}
					>
						{cards[selectedId]}
					</Center>
				)}
				<Flex
					direction="row"
					justify="center"
					gap="1em"
					wrap={"wrap"}
					style={getListStyle()}
				>
					{buttons?.map((elem) => {
						return <UnstyledButton key={nanoid(6)}>{elem}</UnstyledButton>
					})}
				</Flex>
			</Center>
		</>
	)
}

interface CarouselListProps {
	content: VocabCardProps[]
	handleScroll?: () => void
}

export const CarouselList = ({ content }: CarouselListProps): ReactElement => {
	return (
		<>
			<Flex h={{ base: 300, sm: 250, md: 300, lg: 400 }}>
				<Group>
					<Carousel
						withIndicators
						slideSize={"25%"}
						style={{ flex: 1 }}
						slideGap={"md"}
					>
						{content?.map((item, index) => {
							return (
								<>
									<Carousel.Slide>
										<VocabCard
											size={"lg"}
											word={item.word}
											phonetic={item.phonetic}
											meanings={item.meanings}
										/>
									</Carousel.Slide>
								</>
							)
						})}
					</Carousel>
				</Group>
			</Flex>
		</>
	)
}
