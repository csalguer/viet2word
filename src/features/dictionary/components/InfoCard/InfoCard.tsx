/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Card,
	Text,
	Group,
	Container,
	Box,
	Badge,
	SimpleGrid,
	Stack,
	Space,
	Skeleton,
} from "@mantine/core"
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

export interface MockInfoCardType {
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

export const MockInfoCards = ({ content }: MockInfoCardType): ReactElement => {
	// TODO: Implement logic to render multiple InfoCard components based on the content prop.
	const createCards = useCallback(
		(item, index) => {
			if (!item) {
				return <div />
			} else {
				return (
					<VocabCard
						key={index}
						word={item.word}
						phonetic={""}
						meanings={item.meanings}
					/>
				)
			}
		},
		[content]
	)

	// If no content is provided, return an empty div.
	const cards = content?.map(createCards) || []

	return (
		<Container id={"container"}>
			<SimpleGrid id={"grid"} columns="1fr" gap="md" p="md">
				{cards}
			</SimpleGrid>
		</Container>
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
				<Text size="xl" fw={500}>
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
									<Text size="md">{def.definition}</Text>
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
	// content?: MockInfoCardType["content"][]
	// createCards?: (item: MockInfoCardType["content"][0], index: number) => ReactElement
	// cards?: ReactElement[]
}

export function VocabCard({
	word,
	phonetic,
	meanings,
	isHidden,
}: VocabCardProps) {
	const [visible, toggle] = useState<boolean>(isHidden)
	// const [visibleDefinitions, toggleDefVisibility] =
	// 	useState<boolean>(hideDefinitions)

	const handleClick = useCallback(() => {
		toggle(!visible)
	}, [toggle])

	return (
		<Card shadow="sm" padding="lg" radius="md" onClick={handleClick} withBorder>
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
