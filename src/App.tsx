/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement } from "react"
import { useState } from "react"
import "@mantine/core/styles.css"
import {
	AppShell,
	ColorSchemeScript,
	MantineProvider,
	createTheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import AppConfig from "./config"

const queryClient = new QueryClient()

type AppProps = { router: ReturnType<typeof createRouter> }

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<>
			<AppConfig>
				<RouterProvider router={router} />
			</AppConfig>
		</>
	)
}

export default App
