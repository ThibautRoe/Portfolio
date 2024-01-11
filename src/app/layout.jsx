"use client"

import { createContext, useState, useEffect } from "react"
import SplashScreen from "@/components/SplashScreen"
import { nunito, paytoneOne, gloriaHallelujah } from "@/utils/fonts"
import "@/assets/globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false // https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work

/* import dynamic from "next/dynamic"
const DynamicTestViewport = dynamic(() => import("../components/TestViewport"), { ssr: false }) */

export const GlobalContext = createContext()

export default function RootLayout({ children }) {
    const [isSplashScreenOnPage, setIsSplashScreenOnPage] = useState(true)

    useEffect(() => {
        const removeSplashScreen = () => {
            const loader = document.getElementById("splashScreen")
            if (loader) {
                setTimeout(() => {
                    loader.remove()
                    document.body.style.overflow = "auto"
                    setIsSplashScreenOnPage(false)
                }, 5300)
            }
        }

        window.onload = removeSplashScreen

        return () => {
            window.onload = null
        }
    }, [isSplashScreenOnPage])

    return (
        <html
            lang="fr"
            className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} font-nunito snap-y snap-mandatory scroll-smooth`}
        >
            <head></head>
            <body className="text-t-fl-base text-neutral-50">
                <GlobalContext.Provider value={isSplashScreenOnPage}>
                    <SplashScreen />
                    {/* <DynamicTestViewport /> */}
                    {children}
                </GlobalContext.Provider>
            </body>
        </html>
    )
}
