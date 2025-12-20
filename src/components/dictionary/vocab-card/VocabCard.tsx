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
	AspectRatio,
	Blockquote,
	Transition,
} from "@mantine/core"
import { useHover, useMediaQuery } from "@mantine/hooks"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { nanoid } from "nanoid"
import { useCallback, useEffect, useState, ReactNode, ReactElement } from "react"
import palette from "../../../styles/palette"
import { Definition, Meaning } from "../types"

import {
	InfoCardProps,
	Cards,
	WordProps,
	DefinitionsListProps,
	VocabCardProps,
	BookmarkProps,
} from "./types"
import {
	withFadeOut,
	withGreyedSelection,
	withZoom,
} from "../../../lib/animations"
import {
	IconBookmark,
	IconStar,
	IconBookmarkFilled,
	IconStarFilled,
	IconPointFilled,
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

export const Word = ({ word, phonetic }: WordProps) => {
	return (
		<>
			<Stack
				// TODO: Add RTL support alongside i18n support fixes with t() hook (useInternationalization?)
				// direction={isRTL ? "row" : "row-reverse"}
				justify="space-between"
				w={"100%"}
				dir="column"
				p={"md"}
			>
				{!!word ? (
					<Text size="2.8rem" fw={700}>
						{word}
					</Text>
				) : (
					<Skeleton h="48px" w="100%" animate />
				)}
				{!!phonetic ? (
					<Text size="1.4rem" color={palette.neutrals.bluestone} fw={400}>
						{phonetic}
					</Text>
				) : !!word ? (
					<Text></Text>
				) : (
					<Skeleton h="32px" w="80%" animate />
				)}
			</Stack>
		</>
	)
}

export const DefinitionsListLoading = () => {
	return (
		<Stack ml="xl" gap="sm">
			<Skeleton w="100%" h="24px" animate />
			<Skeleton w="100%" h="24px" animate />
			<Skeleton w="100%" h="24px" animate />
		</Stack>
	)
}

const withBlockQuote = (content: Definition): ReactNode => {
	return (
		<>
			<Blockquote
				color={palette.neutrals.slate}
				cite={
					<Text color={palette.neutrals.slate} size="mg">
						{content.example}
					</Text>
				}
			>
				{content.definition}
			</Blockquote>
		</>
	)
}
const withTextElem = (content: Definition): ReactNode => {
	return (
		<Stack key={nanoid(6)} mb="xs">
			<Text fw={700} size="xl">
				{content.definition}
			</Text>
			<Text color={palette.neutrals.slate} size="lg">
				{content.example}
			</Text>
		</Stack>
	)
}
const withDetailTextElem = (content: Definition): ReactNode => {
	return (
		<Stack key={nanoid(6)} mb="xs">
			<Text style={{ textTransform: "capitalize" }} fw={400} size="lg">
				<em>{content.definition}</em>
			</Text>
			<Text color={palette.neutrals.slate} size="lg">
				{content.example}
			</Text>
		</Stack>
	)
}

const withHoverElem = (content): ReactNode => {
	const [toDisplay, setToDisplay] = useState<string>(content?.definition ?? "")
	const { hovered, ref } = useHover()
	const handleHover = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (event.type == "mouseenter") {
				setToDisplay(content.example)
			} else if (event.type == "mouseleave") {
				setToDisplay(content.definition)
			}
		},
		[content]
	)

	return (
		<>
			<Center>
					<Stack key={nanoid(6)} mb="xs" ref={ref} onMouseOver={handleHover}>
						<Text
							fw={700}
							color={
								hovered ? palette.neutrals.bluestone : palette.neutrals.slate
							}
							bg={hovered ? palette.neutrals.bluestone : palette.neutrals.slate}
							size="xl"
						>
							{toDisplay}
						</Text>
					</Stack>
			</Center>
		</>
	)
}

export const DefinitionsList = ({
	definitions,
	onClick,
	variant = false,
}: DefinitionsListProps) => {
	return (
		// <Space h="100%" onClick={onClick}>

		definitions ? (
			<List p="md">
				{definitions?.length &&
					definitions?.map((item, index) => {
						console.log(item)
						const { definitions } = item
						return definitions?.map((def, index) => {
							return variant ? withTextElem(def) : withDetailTextElem(def)
						})
					})}
			</List>
		) : (
			<DefinitionsListLoading />
		)

		// </Space>
	)
}

const VocabHeader = ({ word, phonetic, onClick }) => {
	return (
		<>
			<Group
				justify="flex-end"
				pos={"absolute"}
				display={"inline-flex"}
				right="4px"
				top="4px"
				w="100%"
				p="sm"
				// m="sm"
			>
				<Flex gap="lg" h="fit-content">
					{/* <Star /> */}
					<Bookmark filled={false} callback={() => {}} />
				</Flex>
			</Group>
			<Flex
				justify={"space-between"}
				align={"flex-end"}
				dir="row"
				w="100%"
				m="sm"
				pt="xl"
			>
				<Word word={word} phonetic={phonetic} />
			</Flex>
		</>
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
	onClick,
	ref,
}: VocabCardProps) => {
	const [isVisible, toggleVisibility] = useState<boolean>(visible)
	const [isExpanded, toggleExpanded] = useState<boolean>(expanded)

	const handleExpandedToggle = useCallback(() => {
		toggleExpanded(!isExpanded)
	}, [isExpanded])

	return (
		<Flex ref={ref}>
			<Card
				shadow="sm"
				// p="lg"
				// m={"xl"}
				h="fit-content"
				w={{ md: "100%", lg: "50%" }}
				mih={{ md: "100%", lg: "50%" }}
				miw={"400px"}
				radius="md"
				withBorder
			>
				<Card.Section w={"100%"}>
					{<VocabHeader word={word} phonetic={phonetic} onClick={() => {}} />}
				</Card.Section>
				<Card.Section w={"100%"}>
					<VocabContent expanded={isExpanded} meanings={meanings} />
				</Card.Section>
				{/* <Card.Section w={"100%"}>{}</Card.Section> */}
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

interface VocabContentProps {
	meanings: Meaning[]
	expanded: boolean
	variant?: boolean
}

export const VocabContent = ({
	meanings,
	expanded,
	variant,
}: VocabContentProps): ReactElement => {
	return (
		<>
			<Stack display={"flex"} justify="space-between" m="md">
				{expanded ? (
					<DefinitionsList definitions={meanings} variant />
				) : (
					<Skeleton height={20} />
				)}
			</Stack>
		</>
	)
}

export const EmptyCard = () => {
	return (
		<>
			<VocabCard word={""} phonetic={""} meanings={[]} />
		</>
	)
}

export default VocabCard
