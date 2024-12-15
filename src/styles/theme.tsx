import { createTheme, MantineProvider } from "@mantine/core"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createContext, ReactNode, ColorSchemeScript } from "react"
import withPalette from "./PaletteContext"
import "../../public/fonts.css"

const typography = {
	// spacing: "1rem",
	headings: {
		fontFamily:
			"-system-ui, -apple-system, BlinkMacSystemFont ,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		fontWeight: "700",
		textWrap: "wrap",
		// sizes: {
		// 	xs: "1rem",
		// 	sm: "1.125rem",
		// 	md: "1.25rem",
		// 	lg: "1.5rem",
		// 	xl: "1.75rem",
		// 	xxl: "2rem",
		// 	xxxl: "2.5rem",
		// 	xxxxl: "3rem",
		// },
	},
	// fontSizes: {
	// 	xs: "0.75rem",
	// 	sm: "0.875rem",
	// 	md: "1rem",
	// 	lg: "1.125rem",
	// 	xl: "1.25rem",
	// 	xxl: "1.5rem",
	// 	xxxl: "2rem",
	// 	xxxxl: "2.5rem",
	// },
}
const shadows = {
	sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",
	md: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)",
	lg: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
	xl: "0 1rem 2rem rgba(0, 0, 0, 0.1)",
	xxl: "0 2rem 4rem rgba(0, 0, 0, 0.1)",
	xxxl: "0 4rem 8rem rgba(0, 0, 0, 0.1)",
}

const breakpoints = {
	xs: "30em",
	sm: "48em",
	md: "64em",
	lg: "74em",
	xl: "90em",
}
// const fontFamily = {
// 	fontFamily:
// 		"system-ui, -apple-system, BlinkMacSystemFont ,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
// }
export const options = { typography, shadows, breakpoints }

export const theme = createTheme({
	/** Put your mantine theme override here */
	// spacing: "1rem",
	shadows,
	breakpoints,
	typography,
	// fontFamily,
})

export default theme
