/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement, ReactNode } from "react"
import { useState } from "react"
import "@mantine/core/styles.css"
import {
	ColorSchemeScript,
	Group,
	MantineProvider,
	createTheme,
	Center,
	Stack,
	Text,
	Title,
	Input,
	Button,
	getGradient,
	useMantineTheme,
} from "@mantine/core"
import {
	InfoCard,
	PageContainer,
	SearchBar,
	CardList,
	VocabCard,
	DefinitionsList,
	Word,
} from "../components/dictionary"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../lib/types"
import { MOCK_CARD_INFO } from "../lib/mockData"
import { Navigation } from "../components/navigation/navigation"
import { TabbedCard } from "../components/card/tabbed-card"
import { nanoid } from "nanoid"
import { Reader } from "./Reader.tsx"
import palette from "../styles/palette"
// import { useQueryClient } from "@tanstack/react-query"
// import { useTranslation } from "react-i18next"

const tab = [
	<Word key={nanoid(6)} word={"buôi sang"} partOfSpeech={"NOUN"} />,
	<DefinitionsList
		key={nanoid(6)}
		definitions={[
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition: "Morning",
						example: "Buôi sang tôi ăn đi có bạn ấy.",
					},
				],
			},
		]}
	/>,
	<DefinitionsList
		key={nanoid(6)}
		definitions={[
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition: "Morning",
						example: "Buôi sang tôi ăn đi có bạn ấy.",
					},
				],
			},
		]}
	/>,
	<DefinitionsList
		key={nanoid(6)}
		definitions={[
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition: "Morning",
						example: "Buôi sang tôi ăn đi có bạn ấy.",
					},
				],
			},
		]}
	/>,
	(
		<Stack key={nanoid(6)} mb="sm">
			<Text fw={700} size="lg">
				"This is commonly used to talk about morning routines but less commonly
				used in day to day phrases in the context of when or the time period an
				action was taken/completed/done."
			</Text>
		</Stack>
	),
]
const CONTENT = () => {
	return (
		<>
			<Group id={"home-content"} mt={"57px"} w={"100%"}>
				<Center h={"100%"}>
					<TabbedCard
						tabs={["Word", "Def", "Example", "Notes"]}
						children={tab}
					/>
				</Center>
			</Group>
		</>
	)
}

export function Home(): ReactElement {
	const theme = useMantineTheme()

	return (
		<>
			<PageContainer>
				<Group>
					<Group>
						<Title>Vietnamese Language Tools</Title>
						<Text>
							Anim occaecat non anim nisi est sit officia ipsum commodo
							consequat ex fugiat reprehenderit eu cupidatat tempor deserunt.
						</Text>
						<Button>Try Now</Button>
						<Input placeholder="Search here" w="400px" h="150px"></Input>
					</Group>
					<Group
						display={"flex"}
						w="fit-content"
						h="100%"
						m={"xl"}
						bg={getGradient(
							{
								from: palette.highlighter[0] ?? "",
								to: palette.highlighter[2] ?? "",
								deg: 90,
							},
							theme
						)}
						styles={{ root: { filter: "blur(3.4px)" } }}
					>
						<VocabCard
							word="魔鬼"
							meanings={[
								{
									partOfSpeech: "noun",
									definitions: [
										{
											definition: "Ghost, spirit",
											example: "黑魔者让了魔鬼从村农出去。",
										},
									],
								},
							]}
							visible
							expanded
						></VocabCard>
						<VocabCard
							word="azafrán"
							meanings={[
								{
									partOfSpeech: "noun",
									definitions: [
										{
											definition:
												"Rich and deep yellow spice made from the pistils of the saffron flower",
											example:
												"Para un toque auténtico y mejor color, se le debe agregar un poco de azafrán al arroz.",
										},
									],
								},
							]}
							visible
							expanded
						></VocabCard>
					</Group>
				</Group>
			</PageContainer>
		</>
	)
}
