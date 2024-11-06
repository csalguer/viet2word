import theme from "./styles/theme"
import { createTheme, MantineProvider } from "@mantine/core"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createContext, ReactNode } from "react"
import { ColorSchemeScript } from "@mantine/core"
import { withPalette } from "./styles/PaletteContext"

export const withMantineProvider = ({ children }: ReactNode): ReactNode => {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}
export const withQueryClientProvider = ({ children }: ReactNode): ReactNode => {
	return (
		<QueryClientProvider theme={queryClient}>{children}</QueryClientProvider>
	)
}

const queryClient = new QueryClient()

export const ConfigProvider = (
	{ children }
	// initialConfig: { paperPreview, colors, shadows, headings, breakpoints },
) => {
	return (
		<div>
			<MantineProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<ColorSchemeScript />
					{withPalette(children)}
				</QueryClientProvider>
			</MantineProvider>
		</div>
	)
}

export const AppConfig = ({ children }): ReactNode => {
	return <ConfigProvider>{children}</ConfigProvider>
}

export default AppConfig
