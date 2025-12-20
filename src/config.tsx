import theme from "./styles/theme"
import system from "./theme/theme"
import { createTheme, MantineProvider } from "@mantine/core"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createContext, ReactNode } from "react"
import { ColorSchemeScript } from "@mantine/core"
import { withPalette } from "./styles/PaletteContext"
import "@mantine/carousel/styles.css" // Include carousel styles

export const withMantineProvider = ({ children }: { children: ReactNode }): ReactNode => {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}
export const withQueryClientProvider = ({ children }: { children: ReactNode }): ReactNode => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

const queryClient = new QueryClient()

export const ConfigProvider = (
	{ children }
	// initialConfig: { paperPreview, colors, shadows, headings, breakpoints },
) => {
	return (
		<>
			<ChakraProvider value={system}>
				<MantineProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<ColorSchemeScript />
						{withPalette(children)}
					</QueryClientProvider>
				</MantineProvider>
			</ChakraProvider>
		</>
	)
}

export const AppConfig = ({ children }): ReactNode => {
	return <ConfigProvider>{children}</ConfigProvider>
}

export default AppConfig
