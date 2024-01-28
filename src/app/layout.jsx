import { nunito, paytoneOne, gloriaHallelujah } from "@/utils/fonts"
import "@/assets/globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false // https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work

/* import dynamic from "next/dynamic"
const DynamicTestViewport = dynamic(() => import("../components/TestViewport"), { ssr: false }) */

export default function RootLayout({ children }) {
    return (
        <html
            lang="fr"
            className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} font-nunito text-t-fl-base text-neutral-50 overflow-hidden`}
        >
            <head></head>
            <body className="h-dvh w-dvw scroll-smooth sticky tall:snap-y tall:snap-mandatory overflow-auto">
                {/* <DynamicTestViewport /> */}
                {children}
            </body>
        </html>
    )
}
