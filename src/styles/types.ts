export type ConfigProps = {
	shadows: { sm: str; md: str; lg: str; xl: str; xxl: str; xxxl: str }
	typography: {
		spacing: str
		headings: {
			fontFamily: str
			fontWeight: str
			textWrap: str
			headings: {
				sizes: {
					xs: str
					sm: str
					md: str
					lg: str
					xl: str
					xxl: str
					xxxl: str
					xxxxxl: str
				}
			}
		}
		breakpoints: { xs: str; sm: str; md: str; lg: str; xl: str }
	}
}

export type ColorPalette = {
	warm: str[]
	greens: str[]
	cool: str[]
	highlighter: str[]
	edit: str[]
	primary: str
	secondary: str
	success: str
	info: str
	warning: str
	error: str
	gray: str[]
}
