/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement, ReactNode } from "react"
import { useId, useState, useCallback, useLayoutEffect, useEffect } from "react"
import "@mantine/core/styles.css"
import {
	ColorSchemeScript,
	Group,
	MantineProvider,
	createTheme,
	Center,
	Stack,
	Text,
	Paper,
	Pill,
	Box,
	Flex,
	Title,
	BoxProps,
	Transition,
} from "@mantine/core"
import { useHover } from "@mantine/hooks"
import {
	InfoCard,
	PageContainer,
	SearchBar,
	CardList,
	VocabCard,
	Meaning,
	Word,
} from "../features/dictionary/components"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../common/types"
import { MOCK_CARD_INFO } from "../features/dictionary/api/mockData.ts"
import { Navigation } from "../features/navigation/Navigation.tsx"
import { TabbedCard } from "../features/cardset/components/index.ts"
import { nanoid } from "nanoid"
import {
	intro_lesson_VN,
	intro_lesson_ZH,
} from "../features/reader/api/mockLesson"
import { Gradients } from "../features/layout/styles/Gradients.ts"
import Palette, {
	VnZhHighlightColor,
} from "../features/layout/styles/Palette.ts"
import { useToggle } from "@mantine/hooks"
import palette, { ToneNames } from "../styles/Palette.tsx"
import { VocabCardProps } from "../features/dictionary/components/VocabCard/types.ts"

export interface ReadingMaterialProps {
	title: string
	content: string
	summary: string
}

export const Legend = (props: BoxProps) => {
	return (
		<Center hiddenFrom={props?.hiddenFrom} opacity={1}>
			<Flex
				direction={"row"}
				w={"100%"}
				align={"center"}
				justify={"space-evenly"}
			>
				{Object.entries(VnZhHighlightColor).map((tone, index) => {
					const [toneName, toneColor] = tone
					return (
						<Group gap="sm" key={nanoid(6)}>
							<Paper w={"1.6rem"} h={"1.6rem"} radius="sm" bg={toneColor} />
							<Text size="sm" fw={700} color={toneColor}>
								{toneName}
							</Text>
						</Group>
					)
				})}
			</Flex>
		</Center>
	)
}

export const ReadingMaterial = ({
	title,
	content,
	summary,
}: ReadingMaterialProps): ReactElement => {
	const [sentences, setSentences] = useState<Array<string>>([])
	const [displayedContent, setDisplayedContent] = useState<ReactNode>(null)
	const [sentenceFocused, setSentenceFocused] = useState<number | null>(null)
	const [wordFocused, setWordFocused] = useState<number | null>(null)

	const [value, toggle] = useToggle([false, true])

	const { hovered: wordHovered, ref: wordRef } = useHover()
	const { hovered: sentenceHovered, ref: sentenceRef } = useHover()

	useEffect(() => {
		if (!!content) {
			setSentences(content?.split("."))
		}
	}, [content])

	useEffect(() => {
		const reading: ReactElement[] = []
		// console.log(sentences)
		for (const sentence of sentences) {
			const wordElements = sentence.split(" ").map((word, index) => {
				return (
					<motion.div
						whileHover={{
							border: "1px solid slateblue"
						}}
					>
						<Text
							className="word"
							key={nanoid(6)}
							w={"fit-content"}
							h={"100%"}
							size="xl"
						>
							{word}
						</Text>
					</motion.div>
				)
			})

			const sentenceElem = (
				<>
					<Flex
						className="sentence"
						wrap="wrap"
						align="flex-start"
						direction={"row"}
						style={{ textWrap: "wrap", flexWrap: "wrap" }}
						gap={"0.2rem"}
						justify={"flex-start"}
					>
						{wordElements}
					</Flex>
				</>
			)
			reading.push(sentenceElem)
		}
		setDisplayedContent(reading)
	}, [sentences, wordRef, sentenceRef])

	return (
		<>
			<Stack
				m={{ base: "md", sm: "md", lg: "xl" }}
				p={{ base: "md", sm: "md", lg: "xl" }}
				gap={"md"}
			>
				<Title order={1} fw={700}>
					{title}
				</Title>
				<Flex style={{ flexWrap: "wrap", overflowWrap: "break-word" }}>
					{displayedContent}
				</Flex>
				<Legend hiddenFrom={"sm"} />
			</Stack>
		</>
	)
}

export interface VocabWord extends VocabCardProps {
	note?: string
}

export interface Materia extends ReadingMaterialProps {
	vocab?: VocabWord[]
}

export interface VocabSheetProps {
	vocab: VocabWord[]
}

// TODO:
export const VocabSheet = ({ vocab }: VocabSheetProps): ReactElement => {
	const { t } = useTranslation()
	console.log(useId(), MOCK_CARD_INFO)

	return (
		<>
			<Flex
				w={"100%"}
				justify={"center"}
				align={"center"}
				direction={"column"}
				gap={"md"}
				p="lg"
			>
				<Text color={Palette.gray["800"]} size="1.8rem" fw={700}>
					{/* {t("vocab_sheet.title")} */}
					Vocabulary
				</Text>
				<Flex
					wrap={"wrap"}
					justify={"center"}
					align={"center"}
					direction={"row"}
					gap={"lg"}
				>
					{vocab?.map((card, index) => (
						<>
							<VocabCard
								key={nanoid(6)}
								word={card.word}
								phonetic={card.phonetic}
								meanings={card.meanings}
							/>
						</>
					))}
				</Flex>
			</Flex>
		</>
	)
}

const Section = ({ children }) => {
	return (
		<>
			<Paper
				miw={"85vw"}
				opacity={1}
				m={{ base: 0, sm: 0, lg: "xl" }}
				p={{ base: 0, sm: 0, lg: "xl" }}
				radius="lg"
				bg={"white"}
			>
				{children}
			</Paper>
		</>
	)
}

const Summary = ({ summary }) => {
	return (
		<>
			<Stack
				m={{ base: "md", sm: "md", lg: "xl" }}
				p={{ base: "md", sm: "md", lg: "xl" }}
				gap={"md"}
			>
				<Title order={1} fw={700}>
					Summary
				</Title>
				<Text size="xl" fw={400}>
					{summary}
				</Text>
			</Stack>
		</>
	)
}
const GrammarPreview = ({ grammarPoints }) => {
	return (
		<>
			<Title order={3} fw={400}>
				Grammar Preview
			</Title>
			{grammarPoints?.map((point, index) => (
				<Text key={nanoid(6)} size="xl" fw={400}>
					{point}
				</Text>
			))}
		</>
	)
}

export function Reader(): ReactElement {
	const introductoryElements = [
		() => {
			return <Summary summary={intro_lesson_ZH.summary} />
		},
		() => {
			return (
				<ReadingMaterial
					title={intro_lesson_ZH.title}
					summary={intro_lesson_ZH.summary}
					content={intro_lesson_ZH.content}
				/>
			)
		},
		() => {
			return <GrammarPreview grammarPoints={null} />
		},
	]

	return (
		<>
			<Group
				id={"reader-content"}
				m={{ base: 0, sm: 0, lg: "lg" }}
				p={{ base: 0, sm: 0, lg: "lg" }}
				w={"100%"}
			>
				<Flex
					justify={"center"}
					align={"center"}
					direction={"column"}
					gap={"xl"}
				>
					{introductoryElements.map((element, index) => (
						<Section key={index}>{element()}</Section>
					))}
					<VocabSheet vocab={intro_lesson_ZH.vocab} />
				</Flex>
			</Group>
		</>
	)
}
