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
} from "@mantine/core"
import { motion, AnimatePresence, create } from "framer-motion"
import { nanoid } from "nanoid"
import classes from "../InfoCard/InfoCard.module.css"
import { useCallback, useState } from "react"

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

export const CardList = ({ content }: Cards[]): ReactElement => {
	// TODO: Implement logic to render multiple InfoCard components based on the content prop.

	const [selectedId, setSelectedId] = useState(null)

	const createCards = useCallback(
		(item, index) => {
			if (!item) {
				return <div />
			} else {
				return (
					<motion.div
						key={nanoid(6)}
						layoutId={index}
						onClick={() => {
							setSelectedId(index)
						}}
						style={{ width: "fit-content", height: "fit-content" }}
					>
						<VocabCard
							word={item.word}
							phonetic={""}
							meanings={item.meanings}
						/>
					</motion.div>
				)
			}
		},
		[content]
	)
	// If no content is provided, return an empty div.
	const cards = content?.data?.map(createCards) || []

	return (
		<>
			{cards.map((card) => {
				return <>{card}</>
			})}
			<AnimatePresence initial={false}>
				{selectedId && cards[selectedId]}
			</AnimatePresence>
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
				<Badge color="blue">{partOfSpeech}</Badge>
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
		<Space h="fit-content" onClick={onClick}>
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
	isHidden?: boolean
	// toggleHidden?: () => void
	// handleClick?: () => void
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
	isHidden,
}: VocabCardProps) {
	const [visible, toggle] = useState<boolean>(isHidden)

	const handleClick = useCallback(() => {
		toggle(!visible)
	}, [visible])

	return (
		<Card
			shadow="sm"
			padding="lg"
			h="fit-content"
			w="30vw"
			radius="md"
			onClick={handleClick}
			withBorder
		>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				<Word word={word} partOfSpeech={meanings[0]?.partOfSpeech} />
				{visible ? (
					<Meaning meanings={meanings} onClick={handleClick} />
				) : (
					<Skeleton size={"lg"} />
				)}
			</Stack>
		</Card>
	)
}

export default VocabCard
