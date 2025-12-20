import { createTheme, getGradient, MantineProvider, ColorSchemeScript } from "@mantine/core"
import { RouterProvider, type createRouter } from "@tanstack/react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createContext, ReactNode } from "react"
import withPalette from "./PaletteContext"

import { couleurs } from "./colors"
import { Gradients } from "../features/layout/styles/Gradients"

const typography = {
	// spacing: "1rem",
	headings: {
		fontFamily:
			"-system-ui, -apple-system, BlinkMacSystemFont ,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		fontWeight: "700",
		textWrap: "wrap" as const,
		sizes: {
			h1: {
				// Gradient style
				fontFamily: "Calistoga",
				fontSize: "3.0rem",
				fontWeight: "900",
				lineHeight: "1.1",
				margin: 0,
				padding: 0,
				color: "white",
			},
			h2: {
				// Unit Header
				fontSize: "2.85rem",
				fontWeight: "800",
				lineHeight: "1.0",
				margin: 0,
				padding: 0,
				color: "white",
				fontFamily: "Vũ Thành An",
			},
			h3: {
				// Section Header
				fontSize: "2.5rem",
				fontWeight: "700",
				lineHeight: "1.0",
				margin: 0,
				padding: 0,
				color: "white",
				fontFamily: "Vũ Thành An",
			},
			h4: {
				// Title
				fontSize: "2.2rem",
				fontWeight: "700",
				lineHeight: "1.0",
				margin: 0,
				padding: 0,
				color: "white",
				fontFamily: "Loretta",
			},
			h5: {
				//
				fontFamily: "Loretta",
				fontWeight: "700",
				lineHeight: "1.0",
				margin: 0,
				padding: 0,
				color: "white",
			},
			h6: {
				// Details / Etc.

				fontFamily: "Loretta",
				fontWeight: "500",
				lineHeight: "1.0",
				margin: 0,
				padding: 0,
				color: "#00121b",
			},
		},
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "2.25rem",
		xxl: "2.5rem",
	},
}
const shadows = {
	sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",
	md: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)",
	lg: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
	xl: "0 1rem 2rem rgba(0, 0, 0, 0.1)",
	xxl: "0 2rem 4rem rgba(0, 0, 0, 0.1)",
}

const breakpoints = {
	sm: "330px",
	md: "750px",
	lg: "900px",
}
const fontFamily = {
	fontFamily:
		"system-ui, -apple-system, BlinkMacSystemFont ,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
}

export const options = { typography, shadows, breakpoints }

export const theme = createTheme({
	/** Put your mantine theme override here */
	// spacing: "1rem",
	shadows,
	breakpoints,
	headings: typography.headings,
	// defaultGradient,
	// fontFamily,
})

export default theme
