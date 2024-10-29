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
} from "../features/dictionary/components"

import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../common/types"

export function Home(): ReactElement {
	const [word, setWord] = useState("")
	const [definition, setDefinition] = useState(null)
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	// const handleSearch = async (event: FormEvent): Promise<void> => {
	// if (!word.trim()) return
	// setLoading(true)
	// setError("")
	// try {
	// 	const data = await getWordDefinition(word)
	// 	setDefinition(data)
	// } catch (err) {
	// 	setError("Word not found. Please try another word.")
	// 	setDefinition(null)
	// } finally {
	// 	setLoading(false)
	// }
	// }

	return (
		<Group>
			{/* <div className="max-w-4xl mx-auto space-y-8"> */}
			<h1>Dictionary</h1>
			<SearchBar word={word} onSearch={handleSearch} onWordChange={setWord} />
			{loading && <div className="text-center text-gray-600">Loading...</div>}
			{error && <div className="text-center text-red-500">{error}</div>}
			<PageContainer />
			{/* {
				mockData &&
					mockData.map(
						<InfoCard
							meanings={definition.meanings}
							phonetic={definition.phonetic}
							word={definition.word}
						/>
					)} */}
			{/* </div> */}
		</Group>
	)
}
// export const Home = (): FunctionComponent => {
// 	const { t, i18n } = useTranslation();

// 	const onTranslateButtonClick = async (): Promise<void> => {
// 		if (i18n.resolvedLanguage === "en") {
// 			await i18n.changeLanguage("es");
// 		} else {
// 			await i18n.changeLanguage("en");
// 		}
// 	};

// 	return (
// 		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center">
// 			<p className="text-white text-6xl">{t("home.greeting")}</p>
// 			<button type="submit" onClick={onTranslateButtonClick}>
// 				translate
// 			</button>
// 		</div>
// 	);
// };
