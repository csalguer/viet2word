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
	List,
	Pill,
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
import {
	IconBookmark,
	IconStar,
	IconBookmarkFilled,
	IconStarFilled,
} from "@tabler/icons-react"

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
				p={"md"}
			>
				<Text size="2.8rem" fw={700}>
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
			<List p="md" justify="space-between">
				{definitions?.length &&
					definitions?.map((item, index) => {
						const { definitions, example } = item
						return definitions?.map((def, index) => {
							return (
								<>
									<List.Item>
										<Stack key={nanoid(6)} mb="xs">
											<Text fw={700} size="xl">
												{def.definition}
											</Text>
											<Text size="lg">{def.example}</Text>
										</Stack>
									</List.Item>
								</>
							)
						})
					})}
			</List>
		</Space>
	)
}

const VocabHeader = ({ onClick, badge }) => {
	return (
		<Group>
			<Flex
				justify={"space-between"}
				justify={"flex-end"}
				dir="row"
				w="100%"
				m="sm"
			>
				{badge}
				<Flex gap="lg" h="fit-content">
					<Star />
					<Bookmark />
				</Flex>
			</Flex>
		</Group>
	)
}

// TODO: Make small, med, and larger, separate button-like
// TODO: Account for inner clickable + draggable on outer
// TODO: Pass through "as" prop
export const VocabCard = ({
	word,
	phonetic,
	meanings,
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
		<Flex>
			<Card
				shadow="sm"
				// p="lg"
				m={"xl"}
				h="auto"
				mih={{ sm: "100%", md: "20vh" }}
				radius="md"
				withBorder
			>
				<Card.Section w={"100%"}>
					{<VocabHeader onClick={() => {}} badge={<div></div>} />}
				</Card.Section>
				<Card.Section w={"100%"}>
					<VocabContent word={word} expanded={isExpanded} meanings={meanings} />
				</Card.Section>
				<Card.Section w={"100%"}>{}</Card.Section>
			</Card>
		</Flex>
	)
}

interface IconButtonProps {
	filled: boolean
	callback: () => void
}

const Bookmark = ({ filled, callback }: BookmarkProps) => {
	return (
		<>
			{filled ? (
				<IconBookmarkFilled color="darkred"></IconBookmarkFilled>
			) : (
				<IconBookmark color="lightgray"></IconBookmark>
			)}
		</>
	)
}

const Star = ({ filled, callback }) => {
	return (
		<>
			{filled ? (
				<IconStarFilled color="yellow"></IconStarFilled>
			) : (
				<IconStar color="lightgray"></IconStar>
			)}
		</>
	)
}

const Notification = () => {
	return (
		<>
			<Pill color={"red"}></Pill>
		</>
	)
}

const VocabContent = ({ word, meanings, expanded }): ReactElement => {
	return (
		<>
			<Stack display={"flex"} justify="space-between" m="md">
				<Word
					word={word}
					partOfSpeech={meanings?.length && meanings[0]?.partOfSpeech}
				/>
				{expanded ? (
					<DefinitionsList definitions={meanings} />
				) : (
					<Skeleton size={"lg"} />
				)}
			</Stack>
		</>
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
