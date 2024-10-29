/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Card, Text, Group, Container, Box } from "@mantine/core"
import classes from "../InfoCard/InfoCard.module.css"

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

// const SearchItem = ()

// const SearchItemContent = (:InfoCardProps): ReactDOM.ReactElement => {
// 	return (
//     <div className={classes.content}>
//       <Text fz="lg" className={classes.word}>
//         {word}
//       </Text>
//       {phonetic && (
//         <Text className={classes.phonetic} fz="md">
//           {phonetic}
//         </Text>
//       )}
//     </div>
//   )
// }

const InfoCardContent = ({
	word,
	phonetic,
	meanings,
}: InfoCardProps): ReactElement => {
	return (
		<Card
			size="md"
			withBorder
			className={classes.card}
			color="blue"
			p="xs"
			radius="md"
		>
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

const InfoCard = ({
	word,
	phonetic,
	meanings,
}: InfoCardProps): ReactElement => {
	{
		const formattedMeanings = meanings.map((meaning, index) => (
			<Group key={index} className={classes.definition} fz="md" mt="xs">
				{meaning.partOfSpeech}:{" "}
				{meaning.definitions.map((definitions, index) => (
					<Group key={index} className={classes.subdefinition} fz="xs" mt="xs">
						- {definitions.definition}
						{definitions?.example && (
							
							<Text className={classes.example} fz="xs" mt="xs">
								({definitions?.example})
							</Text>
						)}
					</Group>
				))}
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

export default InfoCard
