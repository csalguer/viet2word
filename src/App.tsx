
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import type { ReactElement, ReactNode } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import system from "./theme/theme"
import { withPalette } from "./styles/PaletteContext"
import { ThemeModeProvider } from "./styles/ThemeModeContext"

const queryClient = new QueryClient()

type AppProps = { router: any }

const App = ({ router }: AppProps): ReactElement => {
	return (
		<ChakraProvider value={system}>
			<ThemeModeProvider>
				<QueryClientProvider client={queryClient}>
					{withPalette(
						<RouterProvider router={router} />
					)}
				</QueryClientProvider>
			</ThemeModeProvider>
		</ChakraProvider>
	)
}

export default App
