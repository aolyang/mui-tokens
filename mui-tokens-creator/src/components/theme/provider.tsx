import type { ReactNode } from "react"
import type { CustomColorMode } from "./context"

import { useEffect, useMemo, useState } from "react"
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"

import useEventListener from "@/hooks/event-listener"

import { ColorModeContext } from "./context"
import { components } from "./default-components"

const parsedAsCustomColorMode = (mode: string | null): CustomColorMode => {
    return (["light", "dark", "system"] as const).find(m => m === mode) || "system"
}

const initialMode = parsedAsCustomColorMode(localStorage.getItem("user-prefer-mode"))

export default function GlobalThemeProvider({ children }: { children: ReactNode }) {
    const preferDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const [mode, togglePaletteMode] = useState<CustomColorMode>(initialMode)

    const paletteMode = useMemo(() => {
        return mode === "system" ? preferDarkMode ? "dark" : "light" : mode
    }, [preferDarkMode, mode])

    const theme = useMemo(() => createTheme({
        cssVariables: true,
        palette: { mode: paletteMode },
        components
    }),
    [paletteMode])

    useEventListener("keypress", (e) => {
        if (e.ctrlKey && e.code === "KeyD") {
            togglePaletteMode(oldMode => oldMode === "dark" ? "light" : "dark")
        }
    }, { target: document })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", paletteMode)
        localStorage.setItem("user-prefer-mode", mode)
    }, [mode, paletteMode])

    const toggleMode = (mode?: CustomColorMode) => {
        togglePaletteMode(oldMode => mode || (oldMode === "dark" ? "light" : "dark"))
    }

    return (
        <ColorModeContext.Provider
            value={{
                mode: paletteMode,
                toggleMode
            }}
        >
            <ThemeProvider theme={theme}>
                {/* <GlobalStyleVars /> */}
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
