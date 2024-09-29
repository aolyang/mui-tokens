import "./styles/initialize.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "@/app"
import GlobalThemeProvider from "@/components/theme/provider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalThemeProvider>
            <BrowserRouter><App /></BrowserRouter>
        </GlobalThemeProvider>
    </StrictMode>
)
