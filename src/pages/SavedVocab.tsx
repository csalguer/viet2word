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
} from "@mantine/core"
import {
	InfoCard,
	PageContainer,
	SearchBar,
	CardList,
	VocabCard,
	VocabContent,
	Word,
} from "../features/dictionary/components"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../common/types"
import { MOCK_CARD_INFO } from "../features/dictionary/api/mockData.ts"
import { Navigation } from "../features/navigation/Navigation.tsx"
import { TabbedCard } from "../features/cardset/components/index.ts"
import { nanoid } from "nanoid"
import { Reader } from "./Reader.tsx"
// import { useQueryClient } from "@tanstack/react-query"
// import { useTranslation } from "react-i18next"

const tab = [
	<Word key={nanoid(6)} word={"buôi sang"} partOfSpeech={"NOUN"} />,
	<Word key={nanoid(6)} word={"ɓuo˧j sa:˧ŋ"} />,
	<VocabContent
		key={nanoid(6)}
		expanded={true}
		meanings={[
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
	({ children }): ReactNode => (
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
				{/* <Center h={"100%"}>
					<TabbedCard
						tabs={["Word", "Def", "Example", "Notes"]}
						children={[tab]}
					/>
				</Center> */}
			</Group>
		</>
	)
}

export function Home(): ReactElement {
	return (
		<>
			<Group>
				<CONTENT />
			</Group>
		</>
	)
}
