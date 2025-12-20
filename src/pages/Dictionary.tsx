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
	Meaning,
	Word,
} from "../components/dictionary"
import { Navigation } from "../components/navigation/navigation"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../lib/types"
import { MOCK_CARD_INFO } from "../lib/mockData"
import { TabbedCard } from "../components/card/tabbed-card"
import { nanoid } from "nanoid"

export function Dictionary(): ReactElement {
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
					<PageContainer>{}</PageContainer>
				</Group>
			</Navigation>
		</>
	)
}
