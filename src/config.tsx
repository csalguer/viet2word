import system from "./theme/theme"
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactNode } from "react"
import { withPalette } from "./styles/PaletteContext"

export const withQueryClientProvider = ({
	children,
}: {
	children: ReactNode
}): ReactNode => {
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
				<QueryClientProvider client={queryClient}>
					{withPalette(children)}
				</QueryClientProvider>
			</ChakraProvider>
		</>
	)
}

export const AppConfig = ({ children }): ReactNode => {
	return <ConfigProvider>{children}</ConfigProvider>
}

export default AppConfig
