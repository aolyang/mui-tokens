import { IconButton } from "@mui/material"

import { useColorMode } from "@/components/theme/context"

export default function ThemeSwitcher() {
    const { mode, toggleMode } = useColorMode()

    const Icon = mode === "dark"
        ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" fill="currentColor">
                <title>brightness-4</title>
                <path
                    d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
                />
            </svg>
        )
        : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" fill="currentColor">
                <title>brightness-6</title>
                <path
                    d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
                />
            </svg>
        )
    return <IconButton onClick={() => toggleMode()}>{Icon}</IconButton>
}
