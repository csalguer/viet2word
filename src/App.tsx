import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import type { ReactElement, ReactNode } from "react"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import {
	ColorSchemeScript,
	MantineProvider,
} from "@mantine/core"
import theme from "./styles/theme"
import { withPalette } from "./styles/PaletteContext"
<<<<<<< Updated upstream
=======
import { ThemeModeProvider } from "./styles/ThemeModeContext"
>>>>>>> Stashed changes
import { Navigation } from "./components/navigation"

const queryClient = new QueryClient()

type AppProps = { router: any }

const App = ({ router }: AppProps): ReactElement => {
	return (
		<MantineProvider theme={theme}>
<<<<<<< Updated upstream
			<QueryClientProvider client={queryClient}>
				<ColorSchemeScript />
				{withPalette(
					<Navigation>
						<RouterProvider router={router} />
					</Navigation>
				)}
			</QueryClientProvider>
=======
			<ThemeModeProvider>
				<QueryClientProvider client={queryClient}>
					<ColorSchemeScript />
					{withPalette(
						<Navigation>
							<RouterProvider router={router} />
						</Navigation>
					)}
				</QueryClientProvider>
			</ThemeModeProvider>
>>>>>>> Stashed changes
		</MantineProvider>
	)
}

export default App
