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
} from "../features/dictionary/components"

import { useTranslation } from "react-i18next"
import type { FunctionComponent } from "../common/types"
import { MOCK_CARD_INFO } from "../features/dictionary/api/mockData.ts"
import { Navigation } from "../features/navigation/Navigation.tsx"

export function Home(): ReactElement {
	const content = <CardList content={MOCK_CARD_INFO} />
	return (
		<>
			<Navigation></Navigation>
			<Group id={"home-content"} mt={"57px"} w={"100vw"}>
				<PageContainer>{content}</PageContainer>
			</Group>
		</>
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
