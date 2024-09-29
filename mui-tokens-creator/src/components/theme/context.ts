import type { PaletteMode } from "@mui/material"
import { createContext, useContext } from "react"

export type CustomColorMode = PaletteMode | "system"
export const ColorModeContext = createContext({} as {
    mode: PaletteMode
    togglePaletteMode: (mode: CustomColorMode) => void
})
export const useColorMode = () => useContext(ColorModeContext)
