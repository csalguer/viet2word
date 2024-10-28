import { Card, Text, Group } from "@mantine/core"

interface InfoCardProps {
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

const classes = {
	card: "temp",
	section: "temp-section",
}

const InfoCard = ({
	word,
	phonetic,
	meanings,
}: InfoCardProps): ReactElement => {
	return (
		<Card withBorder className={classes.card} p="md" radius="md">
			<Card.Section>{word}</Card.Section>
			<Card.Section className={classes.section} mt="md">
				<Group justify="apart">{meanings}</Group>
			</Card.Section>
			<Card.Section className={classes.section}>
				<Text fw={500} fz="lg">
					{phonetic}
				</Text>
			</Card.Section>
		</Card>
	)
}

export default InfoCard
