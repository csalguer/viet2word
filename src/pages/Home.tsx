/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement } from "react"
import { useState } from "react"
import "@mantine/core/styles.css"
import {
	ColorSchemeScript,
	Group,
	MantineProvider,
	createTheme,
} from "@mantine/core"
import {
	InfoCard,
	PageContainer,
	SearchBar,
	CardList,
	VocabCard,
} from "../features/dictionary/components"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../common/types"
import { MOCK_CARD_INFO } from "../features/dictionary/api/mockData.ts"
import { Navigation } from "../features/navigation/Navigation.tsx"

export function Home(): ReactElement {
	const content = (
		<motion.div layout>
			<CardList content={MOCK_CARD_INFO} />{" "}
			<TabbedCard tabs={["Word", "Definition", "Example", "Notes"]}>
				<VocabCard
					word={"buôi sang"}
					phonetic={"ɓuo˧j sa:˧ŋ"}
					visible
					expanded
					meanings={[{ meaning: { partOfSpeech: "", definitions: [
						definition: "Morning" , example: "Buôi sang tôi ăn đi có bạn ấy."
					]}}]}
				/>
			</TabbedCard>
		</motion.div>
	)
	return (
		<>
			<Navigation>
				<Group
					style={{
						background:
							"radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
						height: "100%",
					}}
				>
					<Group id={"home-content"} mt={"57px"} w={"100vw"}>
						<PageContainer>
						motion.div layout>
			<CardList content={MOCK_CARD_INFO} />{" "}
			<TabbedCard tabs={["Word", "Definition", "Example", "Notes"]}>
				<VocabCard
					word={"buôi sang"}
					phonetic={"ɓuo˧j sa:˧ŋ"}
					visible
					expanded
					meanings={[{ meaning: { partOfSpeech: "", definitions: [
						definition: "Morning" , example: "Buôi sang tôi ăn đi có bạn ấy."
					]}}]}
				/>
			</TabbedCard>
		</motion.div>


						</PageContainer>
					</Group>
				</Group>
			</Navigation>
		</>
	)
}
