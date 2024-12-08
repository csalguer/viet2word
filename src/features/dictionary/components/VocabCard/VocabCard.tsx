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
import { useCallback, useEffect, useState } from "react"
import palette from "../../../../styles/Palette"

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



// TODO: Remember to internationalize all type accesses for the PartOfSpeech enum type
// TODO: Type out all possible parts of speech including:
//       -[] Zh
//       -[] Kr
//       -[] Sp
//       -[] Jp
//       -[] Eng
//       -[] Vn
// enum type PartOfSpeech {
// 	noun
// 	adj
// adv
// verb, ..., etc.
// }


export const Word = ({ word, partOfSpeech, isRTL = false }: WordProps) => {
	return (
		<>
			<Flex
				// TODO: Add RTL support alongside i18n support fixes with t() hook (useInternationalization?)
				// direction={isRTL ? "row" : "row-reverse"}
				justify="space-between"
				mt="md"
				mb="xs"
			>
				<Text size="xl" fw={700}>
					{word}
				</Text>
				{partOfSpeech && <Badge>{partOfSpeech}</Badge>}
			</Flex>
		</>
	)
}
export const DefinitionsList = ({
	definitions,
	onClick,
}: DefinitionsListProps) => {
	return (
		<Space h="100%" onClick={onClick}>
			<Stack justify="space-between" mt="md" mb="xs">
				{definitions?.length &&
					definitions?.map((item, index) => {
						const { definitions, example } = item
						return definitions?.map((def, index) => {
							return (
								<>
									<Group>
										-
										<Stack key={nanoid(6)} mb="xs">
											<Text fw={700} size="md">
												{def.definition}
											</Text>
											<Text size="xs">{def.example}</Text>
										</Stack>
									</Group>
								</>
							)
						})
					})}
			</Stack>
		</Space>
	)
}

// TODO: Make small, med, and larger, separate button-like
// TODO: Account for inner clickable + draggable on outer
// TODO: Pass through "as" prop

export const VocabCard = ({
	word,
	phonetic,
	definitions,
	vertical = false,
	size,
	visible = true,
	expanded = true,
	onClick = null,
	handle,
}: VocabCardProps) => {
	const [isVisible, toggleVisibility] = useState<boolean>(visible)
	const [isExpanded, toggleExpanded] = useState<boolean>(expanded)

	const handleExpandedToggle = useCallback(() => {
		toggleExpanded(!isExpanded)
	}, [isExpanded])

	return (
		<Card
			shadow="sm"
			padding="lg"
			h="auto"
			mah={{ base: 300, sm: "100%", md: "25vh" }}
			mih={{ base: 300, sm: "100%", md: "20vh" }}
			w={{ base: 300, sm: "100%", md: "25vw" }}
			radius="md"
			withBorder
		>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				<Word
					word={word}
					partOfSpeech={definitions?.length && definitions[0]?.partOfSpeech}
				/>
				{isExpanded ? (
					<DefinitionsList definitions={definitions} />
				) : (
					<Skeleton size={"lg"} />
				)}
			</Stack>
		</Card>
	)
}

export const EmptyCard = () => {
	return (
		<>
			<VocabCard word={"  "} meanings={[]} />
		</>
	)
}

export default VocabCard
