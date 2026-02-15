import { createContext, Context, useContext } from "react"
import { type ColorPalette } from "./types"

import palette from "../styles/palette"

const INITIAL_PALETTE_CONTEXT = palette

const PaletteContext = createContext<ColorPalette>(INITIAL_PALETTE_CONTEXT)
export const withPalette = (children) => {
	const context = useContext(PaletteContext)

	return (
		<>
			<PaletteContext.Provider value={context}>
				{children}
			</PaletteContext.Provider>
		</>
	)
}

export default withPalette


