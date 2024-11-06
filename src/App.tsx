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
	const [isOpen, { toggle }] = useDisclosure()
	return (
		<AppConfig>
			<AppShell
				header={{ size: "8em" }}
				navbar={{
					hidden: "md",
					hiddenFrom: "sm",
					collapsed: { mobile: !isOpen },
				}}
				padding={"md"}
			>
				<RouterProvider router={router} />
				<AppShell.Header>"HEADER"</AppShell.Header>

				<AppShell.Navbar>"Navbar"</AppShell.Navbar>
			</AppShell>
		</AppConfig>
	)
}

export default App
