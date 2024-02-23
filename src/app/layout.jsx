import { nunito, paytoneOne, gloriaHallelujah } from "@/utils/fonts"
import SplashScreen from "@/components/SplashScreen"
import "@/assets/globals.css"

/* import dynamic from "next/dynamic"
const DynamicTestViewport = dynamic(() => import("@/components/TestViewport"), { ssr: false }) */

export const metadata = {
    title: "Thibaut Roegiers",
    description: "Développeur web & web mobile front-end indépendant",
    openGraph: {
        title: "Thibaut Roegiers",
        description: "Développeur web & web mobile front-end indépendant",
        url: "https://thibautroegiers.dev/",
        siteName: "Thibaut Roegiers",
        locale: "fr_FR",
        type: "website",
    },
    verification: {
        google: "google", //TODO
    },
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="fr"
            className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} antialiased overflow-hidden dark`}
        >
            {/* TODO Can't find a way for SplashScreen to get darkmode right on first render, so for now default to dark mode on first load and dark mode applied by HeroAnimation component when removing SplashScreen when animation starts*/}
            <body className="h-dvh w-dvw font-nunito text-t-fl-base text-neutral-600 dark:text-neutral-50 scroll-smooth">
                {/* <DynamicTestViewport /> */}
                <SplashScreen />
                {children}
            </body>
        </html>
    )
}
