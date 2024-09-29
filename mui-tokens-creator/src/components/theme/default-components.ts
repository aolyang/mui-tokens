import type { ThemeOptions } from "@mui/material"

// https://v5.mui.com/material-ui/customization/color/ ----------< all colors >
// https://v5.mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://v5.mui.com/material-ui/customization/palette/
export const components: ThemeOptions["components"] = {
    MuiTextField: {
        defaultProps: {
            size: "small"
        }
    },
    MuiButton: {
        defaultProps: {
            size: "small",
            disableElevation: true
        },
        styleOverrides: {
            root: {
                textTransform: "none"
            },
            sizeSmall: {
                minWidth: 0
            }
        }
    },
    MuiSvgIcon: {
        defaultProps: {
            fontSize: "small"
        }
    }
}
