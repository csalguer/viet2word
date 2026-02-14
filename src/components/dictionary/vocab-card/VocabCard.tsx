/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Text,
	Center,
	HStack,
	Container,
	Box,
	Badge,
	SimpleGrid,
	Stack,
	Skeleton,
	Flex,
	List,
	Card,
	Blockquote,
	IconButton,
	Heading,
} from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { nanoid } from "nanoid"
import {
	useCallback,
	useEffect,
	useState,
	ReactNode,
	ReactElement,
} from "react"
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
import { withFadeOut, withZoom } from "@/styles/animations"
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
				p={"4"}
			>
				{!!word ? (
					<Heading fontSize="2.8rem" fontWeight={700} as="h2">
						{word}
					</Heading>
				) : (
					<Skeleton height="48px" width="100%" />
				)}
				{!!phonetic ? (
					<Text
						fontSize="1.4rem"
						color={palette.neutrals.bluestone}
						fontWeight={400}
					>
						{phonetic}
					</Text>
				) : !!word ? (
					<Text></Text>
				) : (
					<Skeleton height="32px" width="80%" />
				)}
			</Stack>
		</>
	)
}

export const DefinitionsListLoading = () => {
	return (
		<Stack ml="xl" gap="sm">
			<Skeleton w="100%" h="24px" />
			<Skeleton w="100%" h="24px" />
			<Skeleton w="100%" h="24px" />
		</Stack>
	)
}

const withBlockQuote = (content: Definition): ReactNode => {
	return (
		<>
			<Blockquote.Root color={palette.neutrals.slate}>
				<Blockquote.Content>{content.definition}</Blockquote.Content>
				<Blockquote.Caption>
					<Text color={palette.neutrals.slate} fontSize="md">
						{content.example}
					</Text>
				</Blockquote.Caption>
			</Blockquote.Root>
		</>
	)
}
const withTextElem = (content: Definition): ReactNode => {
	return (
		<Stack key={nanoid(6)} mb="2">
			<Text fontWeight={700} fontSize="xl">
				{content.definition}
			</Text>
			<Text color={palette.neutrals.slate} fontSize="lg">
				{content.example}
			</Text>
		</Stack>
	)
}
const withDetailTextElem = (content: Definition): ReactNode => {
	return (
		<Stack key={nanoid(6)} mb="2">
			<Text
				style={{ textTransform: "capitalize" }}
				fontWeight={400}
				fontSize="lg"
			>
				<em>{content.definition}</em>
			</Text>
			<Text color={palette.neutrals.slate} fontSize="lg">
				{content.example}
			</Text>
		</Stack>
	)
}

const withHoverElem = (content: Definition): ReactNode => {
	const [toDisplay, setToDisplay] = useState<string>(content?.definition ?? "")
	const [hovered, setHovered] = useState(false)

	const handleHover = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (event.type == "mouseenter") {
				setToDisplay(content.example || "")
				setHovered(true)
			} else if (event.type == "mouseleave") {
				setToDisplay(content.definition)
				setHovered(false)
			}
		},
		[content]
	)

	return (
		<>
			<Center>
				<Stack
					key={nanoid(6)}
					mb="2"
					onMouseEnter={handleHover}
					onMouseLeave={handleHover}
				>
					<Text
						fontWeight={700}
						color={
							hovered ? palette.neutrals.bluestone : palette.neutrals.slate
						}
						bg={hovered ? palette.neutrals.bluestone : palette.neutrals.slate}
						fontSize="xl"
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
			<List.Root p="4">
				{definitions?.length &&
					definitions?.map((item, index) => {
						// console.log(item)
						const { definitions } = item
						return definitions?.map((def, index) => {
							return (
								<List.Item key={index}>
									{variant ? withTextElem(def) : withDetailTextElem(def)}
								</List.Item>
							)
						})
					})}
			</List.Root>
		) : (
			<DefinitionsListLoading />
		)

		// </Space>
	)
}

import { useSavedVocabStore } from "@/stores/savedVocab"

const VocabHeader = ({ word, phonetic, onClick }: any) => {
	const { isSaved, toggleSaved } = useSavedVocabStore()
	const saved = isSaved(word)

	return (
		<>
			<HStack
				justify="flex-end"
				pos={"absolute"}
				display={"inline-flex"}
				right="4px"
				top="4px"
				w="100%"
				p="2"
				// m="sm"
			>
				<Flex gap="lg" h="fit-content">
					{/* <Star /> */}
					<Bookmark
						filled={saved}
						callback={(e: any) => {
							e.stopPropagation()
							toggleSaved(word)
						}}
					/>
				</Flex>
			</HStack>
			<Flex
				justify={"space-between"}
				align={"flex-end"}
				dir="row"
				w="100%"
				m="2"
				pt="4"
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
			<Card.Root
				shadow="sm"
				// p="lg"
				// m={"xl"}
				h="fit-content"
				w={{ md: "100%", lg: "50%" }}
				minH={{ md: "100%", lg: "50%" }}
				minW={"400px"}
				borderRadius="md"
				borderWidth="1px"
			>
				<Box w={"100%"}>
					{<VocabHeader word={word} phonetic={phonetic} onClick={() => {}} />}
				</Box>
				<Box w={"100%"}>
					<VocabContent expanded={isExpanded} meanings={meanings} />
				</Box>
				{/* <Card.Section w={"100%"}>{}</Card.Section> */}
			</Card.Root>
		</Flex>
	)
}

interface IconButtonProps {
	filled: boolean
	callback: () => void
}

const Bookmark = ({ filled, callback }: BookmarkProps) => {
	return (
		<IconButton
			variant="ghost"
			size="sm"
			onClick={callback}
			aria-label={filled ? "Remove from saved" : "Save word"}
		>
			{filled ? (
				<IconBookmarkFilled color="darkred" />
			) : (
				<IconBookmark color="lightgray" />
			)}
		</IconButton>
	)
}

const Star = ({ filled, callback }: any) => {
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
			<Badge colorPalette={"red"}></Badge>
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
			<Stack display={"flex"} justify="space-between" m="4">
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
