"use client"

import { useEffect, useState } from "react"
import { nunito, paytoneOne, gloriaHallelujah } from "@/utils/fonts"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Loading from "@/app/loading"

import "@/assets/globals.css"

config.autoAddCss = false // https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work

/* import dynamic from "next/dynamic"
const DynamicTestViewport = dynamic(() => import("../components/TestViewport"), { ssr: false }) */

export default function RootLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const initialHash = window.location.hash

        if (!initialHash) {
            window.location.hash = "#home"
        }

        const scrollToCurrentHash = () => {
            const currentHash = window.location.hash
            const targetElement = document.querySelector(currentHash)
            if (targetElement) {
                targetElement.scrollIntoView()
            }
        }

        const loadingIsDone = () => {
            setIsLoading(false)
            setTimeout(() => {
                scrollToCurrentHash()
            }, 500)
        }

        window.addEventListener("load", loadingIsDone)
        window.addEventListener("hashchange", scrollToCurrentHash)

        return () => {
            window.removeEventListener("load", loadingIsDone)
            window.removeEventListener("hashchange", scrollToCurrentHash)
        }
    }, [])

    return (
        <html lang="fr" className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} overflow-hidden`}>
            <head>
                <title>Thibaut Roegiers - Développeur web front-end</title>
                <meta name="description" content="J’adore <coder /> des sites modernes, dynamiques et responsive !" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thibautroegiers.dev/" />
                <meta property="og:site_name" content="Thibaut Roegiers" />
                <meta property="og:title" content="Thibaut Roegiers" />
                <meta property="og:description" content="J’adore <coder /> des sites modernes, dynamiques et responsive !" />
                <link rel="icon" href="favicon.svg" type="image/svg+xml" />
                <link rel="icon" sizes="96x96" href="favicon.png" type="image/png" />
            </head>
            <body className="h-dvh w-dvw font-nunito text-t-fl-base text-neutral-50 scroll-smooth sticky tall:snap-y tall:snap-mandatory overflow-auto">
                {/* <DynamicTestViewport /> */}
                {isLoading ? <Loading /> : children}
            </body>
        </html>
    )
}
