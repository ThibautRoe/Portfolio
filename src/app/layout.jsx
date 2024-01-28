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
            className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} font-nunito tall:snap-y tall:snap-mandatory scroll-smooth`}
        >
            <head></head>
            <body className="text-t-fl-base text-neutral-50">
                {/* <DynamicTestViewport /> */}
                {children}
            </body>
        </html>
    )
}
