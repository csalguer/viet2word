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
import classes from "../InfoCard/InfoCard.module.css"
import { useCallback, useEffect, useState } from "react"
import palette from "../../../../styles/Palette"

const spring = {
	type: "spring",
	stiffness: 600,
	damping: 60,
	duration: 1.2,
}

export interface InfoCardProps {
	word: string
	phonetic?: string
	meanings: Array<{
		partOfSpeech: string
		definitions: Array<{
			definition: string
			example?: string
		}>
	}>
}

export type Meaning = {
	meanings: {
		partOfSpeech: string
		definitions: {
			definition: string
			example: string
		}
	}
}

export interface Cards {
	content: {
		word: string
		meanings: {
			partOfSpeech: string
			definitions: {
				definition: string
				example: string
			}
		}[]
	}[]
}

export const withFadeOut = (element) => {
	return (
		<motion.div
			layout
			exit={{ opacity: 0.0, scale: 1.2 }}
			initial={{ opacity: 1, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={spring}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{element}
		</motion.div>
	)
}
export const withGreyedSelection = (element) => {
	return (
		<motion.div
			layout
			exit={{ opacity: 1, scale: 1.2, color: "#0f015225" }}
			initial={{ opacity: 1, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={spring}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{element}
		</motion.div>
	)
}

export const withZoom = (element, scaleBy = 1) => {
	return (
		<motion.div
			layout
			exit={{ opacity: 1, scale: scaleBy * 0.2 }}
			initial={{ opacity: 1, scale: scaleBy * 0.9 }}
			animate={{ opacity: 1, scale: scaleBy * 1.1 }}
			transition={{ ...spring, duration: 2.2, ease: "linear" }}
			whileHover={{ scale: scaleBy * 0.85 }}
			whileTap={{ scale: scaleBy * 0.75 }}
		>
			{element}
		</motion.div>
	)
}

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
					onClick={() => {
						setSelectedId(null)
					}}
				>
					{withZoom(
						<VocabCard
							key={nanoid(6)}
							word={item.word}
							phonetic={""}
							expanded
							meanings={item.meanings}
						/>,
						isMobile ? 1.1 : 2.0
					)}
				</Center>
			)
			return <AnimatePresence>{cardElement}</AnimatePresence>
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
			return <AnimatePresence>{elem}</AnimatePresence>
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
					wrap={"flex-wrap"}
					style={getListStyle()}
				>
					{buttons.map((elem) => {
						return <>{elem}</>
					})}
				</Flex>
			</Center>
		</>
	)
}

export const VocabCarousel = ({ content }: Cards[]): ReactElement => {
	// TODO: Implement logic to render multiple InfoCard components based on the content prop.

	const [selectedId, setSelectedId] = useState(null)
	const [cards, setCards] = useState([])
	const [buttons, setButtons] = useState([])

	const createCards = useCallback(
		(item, index) => {
			if (!item) {
				return <div />
			} else {
				return (
					<AnimatePresence>
						<motion.div
							key={nanoid(6)}
							layout
							// layoutId={index}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							exit={{ opacity: 0.5, scale: 1.1 }}
							initial={{ opacity: 1, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={spring}
							// style={{ width: "fit-content", height: "fit-content" }}
						>
							<VocabCard
								onClick={() => {
									selectedId ? setSelectedId(null) : setSelectedId(index)
									console.log(index, item)
								}}
								word={item.word}
								phonetic={""}
								isHidden={false}
								meanings={item.meanings}
							/>
						</motion.div>
					</AnimatePresence>
				)
			}
		},
		[content]
	)
	const createVocabButtons = useCallback(
		(item, index) => {
			if (!!item) {
				return <div />
			} else {
				return (
					<AnimatePresence>
						<motion.div
							key={nanoid(6)}
							layout
							// layoutId={index}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							exit={{ opacity: 0.5, scale: 1.1 }}
							initial={{ opacity: 1, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={spring}
							// style={{ width: "fit-content", height: "fit-content" }}
						>
							<VocabCard
								onClick={() => {
									selectedId ? setSelectedId(null) : setSelectedId(index)
									console.log(index, item)
								}}
								word={item.word}
								phonetic={""}
								isHidden={true}
								meanings={item.meanings}
							/>
						</motion.div>
					</AnimatePresence>
				)
			}
		},
		[content]
	)

	useEffect(() => {
		// If no content is provided, return an empty div.
		setCards(content?.data?.map(createCards))
		setButtons(content?.data?.map(createVocabButtons))
	}, [content])

	return (
		<>
			{selectedId ? (
				<Center
					style={{ zIndex: 1 }}
					p="md"
					onClick={() => {
						selectedId ? setSelectedId(null) : setSelectedId(index)
						return
					}}
					pos={"absolute"}
				>
					{buttons[selectedId]}
				</Center>
			) : null}
			<Group>
				<Flex direction="row" justify="flex-start" gap="1em" wrap={"wrap"}>
					{cards.map((card) => {
						return <>{card}</>
					})}
				</Flex>
			</Group>
		</>
	)
}
interface WordProps {
	word: string
	partOfSpeech?: string
}
const Word = ({ word, partOfSpeech }: WordProps) => {
	return (
		<>
			<Group justify="space-between" mt="md" mb="xs">
				<Text size="xl" fw={700}>
					{word}
				</Text>
				<Badge>{partOfSpeech}</Badge>
			</Group>
		</>
	)
}
interface MeaningProps {
	meanings: {
		definition: string
		example?: string
	}[]
	onClick?: () => void
}
const Meaning = ({ meanings, onClick }: MeaningProps) => {
	return (
		<Space h="100%" onClick={onClick}>
			<Stack justify="space-between" mt="md" mb="xs">
				{meanings.length &&
					meanings.map((item, index) => {
						const { definitions, example } = item
						return definitions.map((def, index) => {
							return (
								<Stack mb="xs" key={nanoid(6)}>
									<Text fw={700} size="md">
										{def.definition}
									</Text>
									<Text size="xs">{def.example}</Text>
								</Stack>
							)
						})
					})}
			</Stack>
		</Space>
	)
}

interface VocabCardProps extends InfoCardProps {
	// hideDefinitions?: boolean
	visible?: boolean
	expanded?: boolean
	// toggleHidden?: () => void
	onClick?: () => void
	// word?: string
	// phonetic?: string
	// meanings?: Meaning[]
	// onClick?: () => void
	// content?: CardList[]["content"][]
	// createCards?: (item: CardList[]["content"][0], index: number) => ReactElement
	// cards?: ReactElement[]
}

export function VocabCard({
	word,
	phonetic,
	meanings,
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
			w={{ base: 300, sm: "100%", md: "30vw" }}
			radius="md"
			withBorder
		>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				<Word word={word} partOfSpeech={meanings[0]?.partOfSpeech} />
				{isExpanded ? (
					// <Spoiler expanded={visible}>
					<Meaning
						meanings={meanings}
						// Trigger visibility after draggability =>   onExpandedChange={}
					/>
				) : (
					// </Spoiler>
					<Skeleton size={"lg"} />
				)}
			</Stack>
		</Card>
	)
}

export const EmptyCard = () => {
	return (
		<>
			<VocabCard word={"      "} meanings={[]} />
		</>
	)
}

export default VocabCard
