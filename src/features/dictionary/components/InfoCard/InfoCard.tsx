import React from "react";
import { IconHeart } from "@tabler/icons-react";
import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	Button,
	ActionIcon,
} from "@mantine/core";

interface InfoCardProps {
	word: string;
	phonetic?: string;
	meanings: Array<{
		partOfSpeech: string;
		definitions: Array<{
			definition: string;
			example?: string;
		}>;
	}>;
}

const InfoCard = ({ word, phonetic, meanings }: InfoCardProps) => {
	return (
		<Card withBorder radius="md" p="md" className={classes.card}>
			<Card.Section>{word}</Card.Section>
			<Card.Section className={classes.section} mt="md">
				<Group justify="apart">{meanings}</Group>
			</Card.Section>
			<Card.Section className={classes.section}>
				<Text fz="lg" fw={500}>
					{phonetic}
				</Text>
			</Card.Section>
		</Card>
	);
};

export default InfoCard;
