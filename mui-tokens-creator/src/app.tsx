import "allotment/dist/style.css"

import { Box, ButtonGroup, Link, useTheme } from "@mui/material"
import { Allotment } from "allotment"

import IconMui from "@/components/icons/icon-mui"
import LinkCellphonePreview from "@/components/link-cellphone-preview"
import LinkFilePreview from "@/components/link-file-preview"
import LinkGithub from "@/components/link-github"
import LinkMonitorPreview from "@/components/link-monitor-preview"
import LinkTabletPreview from "@/components/link-tablet-preview"
import ThemeSwitcher from "@/components/theme-switcher"

const muiNpmUrl = "https://www.npmjs.com/package/@mui/material?activeTab=versions"

export default function App() {
    const theme = useTheme()
    return (
        <Allotment defaultSizes={[240, window.innerWidth - 240]}>
            <Allotment.Pane className="p-4" minSize={240} maxSize={400}>
                <Link className="flex items-center gap-2" href={muiNpmUrl} target="_blank">
                    <IconMui />
                    <span>npm@^v6</span>
                </Link>
                <div style={{ height: "calc(100% - 24px)" }}>
                    files
                </div>
            </Allotment.Pane>
            <Allotment.Pane>
                <Box className="flex justify-center p-2 gap-4">
                    <ButtonGroup>
                        <LinkMonitorPreview />
                        <LinkTabletPreview />
                        <LinkCellphonePreview />
                    </ButtonGroup>
                    <LinkFilePreview />
                    <div className="absolute right-0">
                        <ThemeSwitcher />
                        <LinkGithub />
                    </div>
                </Box>
                <Box sx={{ height: "calc(100% - 54px)", backgroundColor: theme.palette.background.paper }}>
                    <h1>Typography</h1>
                </Box>
            </Allotment.Pane>
        </Allotment>
    )
}
