/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Card, Text, Group, Container, Box, SimpleGrid } from "@mantine/core"
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
					<InfoCard key={index} word={item.word} meanings={item.meanings} />
				)
			}
		},
		[content]
	)

	// If no content is provided, return an empty div.
	const cards = content?.map(createCards) || []

	return (
		<Container id={"container"} maxWidth="container.xl">
			<SimpleGrid
				id={"grid"}
				columns="1fr"
				gap="md"
				p="md"
				maxWidth="container.xl"
			>
				{cards}
			</SimpleGrid>
		</Container>
	)
}
export default InfoCard
