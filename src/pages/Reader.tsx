/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement, ReactNode } from "react"
import { useId, useState, useCallback, useLayoutEffect, useEffect } from "react"
import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Center,
	HStack,
	BoxProps,
	Button,
	Popover,
} from "@chakra-ui/react"
import {
	InfoCard,
	PageContainer,
	SearchBar,
	CardList,
	VocabCard,
	Meaning,
	Word,
} from "../components/dictionary"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../lib/types"
import { MOCK_CARD_INFO } from "../lib/mockData"
import { Navigation } from "../components/navigation/navigation"
import { TabbedCard } from "../components/card/tabbed-card"
import { nanoid } from "nanoid"
import { intro_lesson_VN, intro_lesson_ZH } from "../lib/mockLesson"
import palette, { ToneNames, VnZhHighlightColor } from "../styles/palette"
import { VocabCardProps } from "../components/dictionary/vocab-card/types"

export interface ReadingMaterialProps {
	title: string
	content: Array<{ word: string; definition: string }>
	summary: string
}

export const Legend = (props: BoxProps) => {
	return (
		<Center hideFrom={props?.hideFrom} opacity={1}>
			<Flex
				direction={"row"}
				w={"100%"}
				align={"center"}
				justify={"space-evenly"}
			>
				{Object.entries(VnZhHighlightColor).map((tone, index) => {
					const [toneName, toneColor] = tone
					return (
						<HStack gap="sm" key={nanoid(6)}>
							<Box w={"1.6rem"} h={"1.6rem"} borderRadius="sm" bg={toneColor} />
							<Text fontSize="sm" fontWeight={700} color={toneColor}>
								{toneName}
							</Text>
						</HStack>
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
	return (
		<Stack
			m={{ base: "md", sm: "md", lg: "xl" }}
			p={{ base: "md", sm: "md", lg: "xl" }}
			gap={"md"}
		>
			<Heading as="h1" fontWeight={700}>
				{title}
			</Heading>
			<Flex wrap="wrap" gap={2} align="center">
				{content.map((item, index) => (
					<Popover.Root key={index}>
						<Popover.Trigger asChild>
							<Button
								variant="ghost"
								height="auto"
								minW="auto"
								p={1}
								fontSize="xl"
								fontWeight="normal"
								_hover={{ bg: "gray.100", textDecoration: "underline" }}
							>
								{item.word}
							</Button>
						</Popover.Trigger>
						<Popover.Content>
							<Popover.Arrow />
							<Popover.Body>
								<Text fontWeight="bold">{item.word}</Text>
								<Text>{item.definition}</Text>
							</Popover.Body>
						</Popover.Content>
					</Popover.Root>
				))}
			</Flex>
			<Legend hideFrom={"sm"} />
		</Stack>
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
				<Text color={palette.gray["800"]} fontSize="1.8rem" fontWeight={700}>
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
						<VocabCard
							key={`${card.word}-${index}`}
							word={card.word}
							phonetic={card.phonetic}
							meanings={card.meanings}
						/>
					))}
				</Flex>
			</Flex>
		</>
	)
}

const Section = ({ children }) => {
	return (
		<>
			<Box
				minW={"85vw"}
				opacity={1}
				m={{ base: 0, sm: 0, lg: "xl" }}
				p={{ base: 0, sm: 0, lg: "xl" }}
				borderRadius="lg"
				bg={"white"}
				shadow="md"
			>
				{children}
			</Box>
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
				<Heading as="h1" fontWeight={700}>
					Summary
				</Heading>
				<Text fontSize="xl" fontWeight={400}>
					{summary}
				</Text>
			</Stack>
		</>
	)
}
const GrammarPreview = ({ grammarPoints }) => {
	return (
		<>
			<Heading as="h3" fontWeight={400}>
				Grammar Preview
			</Heading>
			{grammarPoints?.map((point, index) => (
				<Text key={nanoid(6)} fontSize="xl" fontWeight={400}>
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
			<HStack
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
			</HStack>
		</>
	)
}
