import { nunito, paytoneOne, gloriaHallelujah } from "../utils/fonts"
import "./globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false
import TestViewport from "../components/TestViewport"

export const metadata = {
    title: "Thibaut Roegiers - Développeur web",
    description: "Generated by create next app", // TODO
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} font-nunito scroll-smooth`}>
            <head></head>
            <body className="text-t-fl-base">
                <TestViewport />
                {children}
            </body>
        </html>
    )
}
