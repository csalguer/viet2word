/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import type { ReactElement } from "react"
import { useState } from "react"
import "@mantine/core/styles.css"
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core"

const queryClient = new QueryClient()

type AppProps = { router: ReturnType<typeof createRouter> }

const theme = createTheme({
	/** Put your mantine theme override here */
	// colors: {
	//   primary: "#3182ce",
	// },
	// shadows: {
	//   default: "0 0 10px rgba(0, 0, 0, 0.1)",
	// },
	// breakpoints: {
	//   sm: "480px",
	//   md: "768px",
	//   lg: "1024px",
	//   xl: "1280px",
	// },
	// fonts: {
	//   heading: "Poppins",
	//   body: "Arial",
	// },
	// transitions: {
	//   default: "0.3s ease-in-out",
	// },
	// shadows: {
	//
	breakpoints: {
		xs: "30em",
		sm: "48em",
		md: "64em",
		lg: "74em",
		xl: "90em",
	},
})

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<MantineProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<ColorSchemeScript />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</MantineProvider>
	)
}

export default App
