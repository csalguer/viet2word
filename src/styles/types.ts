export type ConfigProps = {
	shadows: { sm: string; md: string; lg: string; xl: string; xxl: string; xxxl: string }
	typography: {
		spacing: string
		headings: {
			fontFamily: string
			fontWeight: string
			textWrap: string
			headings: {
				sizes: {
					xs: string
					sm: string
					md: string
					lg: string
					xl: string
					xxl: string
					xxxl: string
					xxxxxl: string
				}
			}
		}
		breakpoints: { xs: string; sm: string; md: string; lg: string; xl: string }
	}
}

export type ColorPalette = {
	warm: string[]
	greens: string[]
	cool: string[]
	highlighter: string[]
	edit: string[]
	primary: string
	secondary: string
	success: string
	info: string
	warning: string
	error: string
	gray: string[]
	colorsEstimate: string[]
	neutrals: {
		beige: string
		warm: string
		slate: string
		bluestone: string
		legalpad: string
		white: string
	}
}
