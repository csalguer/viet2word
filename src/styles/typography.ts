import { TYPOGRAPHY } from "@/theme/design-system"

export const typeScale = {
	display: {
		fontFamily: TYPOGRAPHY.display,
		fontSize: { base: "3xl", md: "5xl" },
		fontWeight: "black",
		letterSpacing: "tight",
		lineHeight: "1.1",
	},
	heading: {
		fontFamily: TYPOGRAPHY.serif,
		fontSize: { base: "xl", md: "2xl" },
		fontWeight: "bold",
		lineHeight: "short",
	},
	subheading: {
		fontFamily: TYPOGRAPHY.sans,
		fontSize: "lg",
		fontWeight: "semibold",
		lineHeight: "base",
	},
	body: {
		fontFamily: TYPOGRAPHY.sans,
		fontSize: "md",
		lineHeight: "tall",
	},
	caption: {
		fontFamily: TYPOGRAPHY.sans,
		fontSize: "sm",
		lineHeight: "base",
	},
	mono: {
		fontFamily: TYPOGRAPHY.mono,
		fontSize: "sm",
		lineHeight: "base",
	},
	wordEntry: {
		fontFamily: TYPOGRAPHY.editorialSerif,
		fontSize: { base: "2xl", md: "3xl" },
		fontWeight: "bold",
		lineHeight: "shorter",
	},
} as const
