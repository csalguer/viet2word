import { createContext, Context, useContext } from "react"
import { type ColorPalette } from "./types"

import palette from "../styles/Palette"

const INITIAL_PALETTE_CONTEXT = palette

const PaletteContext = createContext<ColorPalette>(INITIAL_PALETTE_CONTEXT)
export const withPalette = (children) => {
	const context = useContext(PaletteContext)

	return (
		<>
			<PaletteContext.Provider context={context}>
				{children}
			</PaletteContext.Provider>
		</>
	)
}

export default withPalette
