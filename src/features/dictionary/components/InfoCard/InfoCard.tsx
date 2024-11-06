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
import { useCallback } from "react"

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

export const InfoCardContent = ({
	word,
	phonetic,
	meanings,
}: InfoCardProps): ReactElement => {
	return (
		<Card
			size="md"
			withBorder
			className={classes.InfoCard}
			color="blue"
			// p="xxl"
			display={"flex"}
			direction="column"
			gap="md"
			shadow="sm"
			elevation="md"
			radius="md"
		>
			<Group padding="3rem">
				<Card.Section padding={"5%"} margin={"5%"}>
					{word}
				</Card.Section>
				<Card.Section className={classes.InfoCardContent} mt="md">
					<Group justify="apart">{meanings}</Group>
				</Card.Section>
				<Card.Section className={classes.InfoCardContent}>
					<Text fw={500} fz="lg">
						{phonetic}
					</Text>
				</Card.Section>
			</Group>
		</Card>
	)
}

const InfoCard = ({
	word,
	phonetic,
	meanings,
}: InfoCardProps): ReactElement => {
	{
		const formattedMeanings = meanings?.map((meaning, index) => (
			<Group>
				<Group key={index} className={classes.partOfSpeech} fz="sm" mt="xs">
					Part of Speech: {meaning.partOfSpeech}
				</Group>
				<Group key={index} className={classes.definition} fz="md" mt="xs">
					{meaning.definitions.map((definitions, index) => (
						<Group
							key={index}
							className={classes.subdefinition}
							fz="xs"
							mt="xs"
						>
							- {definitions.definition}
							{definitions?.example && (
								<Text className={classes.example} fz="xs" mt="xs">
									({definitions?.example})
								</Text>
							)}
						</Group>
					))}
				</Group>
			</Group>
		))

		return (
			<div>
				<InfoCardContent
					meanings={formattedMeanings}
					phonetic={phonetic}
					word={word}
				/>
			</div>
		)
	}
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

const Word = ({ word, partOfSpeech }) => {
	return (
		<>
			<Group justify="space-between" mt="md" mb="xs">
				<Text size="xl" fw={500}>
					{word}
				</Text>
				<Badge color="blue">{meanings[0]?.partOfSpeech}</Badge>
			</Group>
		</>
	)
}

const Meaning = ({ meanings, hidden }) => {
	const [isHidden, toggleHidden] = useState(hidden)

	const revealContent = useCallback(() => {
		toggleHidden(!isHidden)
	}, [toggleHidden])

	return (
		<Space h="fit-content">
			{isHidden && <Skeleton></Skeleton>}
			{!isHidden && (
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
			)}
		</Space>
	)
}

export function VocabCard({ word, phonetic, meanings }: InfoCardProps) {
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				<Group justify="space-between" mt="md" mb="xs">
					<Text size="xl" fw={500}>
						{word}
					</Text>
					<Badge color="blue">{meanings[0]?.partOfSpeech}</Badge>
				</Group>

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
			</Stack>
		</Card>
	)
}

export default InfoCard
