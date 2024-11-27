/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement } from "react"
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
} from "@mantine/core"
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

import { Gradients } from "../features/layout/styles/Gradients.ts"
import Palette, {
	VnZhHighlightColor,
} from "../features/layout/styles/Palette.ts"
import { useToggle } from "@mantine/hooks"
import { ToneNames } from "../styles/Palette.tsx"
import { VocabCardProps } from "../features/dictionary/components/InfoCard/types.ts"

export interface ReadingMaterialProps {
	title: string
	content: string
	summary: string
}

export const Legend = () => {
	return (
		<Center opacity={1}>
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
							<Box w={"1.6rem"} h={"1.6rem"} radius="sm" bg={toneColor} />
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
	const [expanded, setExpanded] = useState<boolean>(false)

	const [value, toggle] = useToggle([false, true])
	const handleClick = useCallback(() => {
		toggle()
	}, [expanded])

	return (
		<Stack m="xl" p="xl" direction={"column"} gap={"md"}>
			<Text size="2.4rem" fw={700}>
				{title}
			</Text>
			<Text size="2.0rem" fw={400}>
				Summary
			</Text>
			<Text size="xl" fw={400}>
				{summary}
			</Text>
			<Text size="2.0rem" fw={500}>
				Reading
			</Text>
			<Text size="xl" fw={400}>
				{content}
			</Text>
			<Legend />
		</Stack>
	)
}

export interface VocabWord extends VocabCardProps {
	note?: string
}

export interface Materia extends ReadingMaterialProps {
	vocab?: VocabWord[]
}

// TODO: 
export const VocabSheet = ({}: VocabSheetProps): ReactElement => {
	const { t } = useTranslation()
	console.log(useId(), MOCK_CARD_INFO)

	return (
		<Box>
			<Flex w={"100%"} direction={"column"} gap={"md"}>
				<Text size="xl" fw={700}>
					{/* {t("vocab_sheet.title")} */}
					VOCAB
				</Text>
				<Flex wrap={"wrap"} direction={"column"} gap={"xl"}>
					{intro_lesson?.vocab?.map((card, index) => (
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
		</Box>
	)
}

const intro_lesson = {
	title: "Intro",
	content: `Ana và Carlos ngồi xuống trong sân phổi đợi khi lớp toán bắt đầu. Ana nhìn lên trời và nói: "Chưa là điều kỳ diệu như thế nào đã thay đổi thời tiết gần đây?". Carlos gật đầu và trả lời: "Vâng, những ngày này rất nóng. Tôi hy vọng sẽ có mưa một chút để làm mát không khí". Ana cười và nói: "Tôi cũng vậy, nhưng tôi nghĩ đó là bình thường vào mùa này". Carlos cười và cả hai tiếp tục trò chuyện về thời tiết khi chờ các bạn đến.`,
	summary:
		"Ana and Carlos discussed the hot weather in the courtyard before their math class, with Ana commenting on its sudden change and Carlos expressing his desire for rain.",
	vocab: [
		{
			word: "sân phổi",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "courtyard",
							example: "",
						},
						{
							definition: "yard",
							example: "",
						},
					],
				},
			],
		},
		{
			word: "lớp toán",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "NOUN",
					definitions: [{ definition: "math class", example: "" }],
				},
			],
		},
		{
			word: "nghìn lên trời",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "",
					definitions: [{ definition: "looked up at the sky", example: "" }],
				},
			],
		},
		{
			word: "chưa là điều kỳ diệu",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "EXCL",
					definitions: [{ definition: "isn't it incredible", example: "" }],
				},
			],
		},
		{
			word: "gật đầu",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "VERB",
					definitions: [{ definition: "nodded his head", example: "" }],
				},
			],
		},
		{
			word: "trả lời",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "",
					definitions: [
						{ definition: "replied", example: "" },
						{ definition: "said", example: "" },
					],
				},
			],
		},
		{
			word: "cười",
			phonetic: "",
			meanings: [
				{
					partOfSpeech: "",
					definitions: [
						{ definition: "smiled", example: "" },
						{ definition: "laughed", example: "" },
					],
				},
			],
		},
	],
}

export function Reader(): ReactElement {
	const [data, setData] = useState<Materia | null>(null)

	const mockLoad = useCallback(() => {
		setTimeout(() => {
			setData(intro_lesson)
		}, 1000)
	}, [intro_lesson])

	useLayoutEffect(() => {
		mockLoad()
	}, [])

	return (
		<>
			<Group id={"reader-content"} m="lg" p="lg" w={"100%"}>
				<Center m="xl" p="xl" h={"100%"}>
					<Paper
						miw={"85vw"}
						opacity={1}
						m="xl"
						p="xl"
						radius="lg"
						bg={"white"}
					>
						<ReadingMaterial
							title={data?.title}
							content={data?.content}
							summary={data?.summary}
						/>
						<VocabSheet vocab={data?.vocab} />
					</Paper>
				</Center>
			</Group>
		</>
	)
}
