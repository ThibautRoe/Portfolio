import { SpeedInsights } from "@vercel/speed-insights/next"
import { nunito, paytoneOne, gloriaHallelujah } from "@/lib/fonts"
import SplashScreen from "@/components/SplashScreen"
import "@/assets/globals.css"

/* import dynamic from "next/dynamic"
const DynamicTestViewport = dynamic(() => import("@/components/TestViewport"), { ssr: false }) */

export const metadata = {
    title: "Thibaut Roegiers",
    description: "Développeur web & web mobile front-end indépendant",
    metadataBase: new URL("https://thibautroegiers.dev"),
    openGraph: {
        title: "Thibaut Roegiers",
        description: "Développeur web & web mobile front-end indépendant",
        url: "https://thibautroegiers.dev",
        siteName: "Thibaut Roegiers",
        locale: "fr_FR",
        type: "website",
    },
}

export default function RootLayout({ children }) {
    return (
      <html
        lang="fr"
        className={`${nunito.variable} ${paytoneOne.variable} ${gloriaHallelujah.variable} antialiased overflow-hidden dark`}
        // TODO Utiliser cn() pour les class
        // overflow-hidden on html + 100dvh on body allows for the browser UI on mobile to never hide (html never scrolls because its only child body is always full height and no more), which helps with UX on mobile when scrolling when snap-mandatory is on and each section height is set to 100dvh (dvh → which means the section height changes when the browser UI hides / unhides)
        // The downside is that it breaks scroll position restoration on all browsers but Firefox. Scroll restoration on anchors links (http://thibautroegiers.dev/#skills for example) on page refresh still works on Firefox and Safari but not on Chrome based browsers (Chrome, Opera, Arc, etc.).
      >
        <head>
          <link
            rel="preload"
            as="fetch"
            crossOrigin="anonymous"
            type="application/zip+lottie"
            href="/hero-animation.lottie"
          />
          {/* Can't find a way to easily preload assets with Next.js app router without using <head> (not supposed to use it like that) */}
        </head>
        {/* TODO Can't find a way for SplashScreen to get darkmode right on first render if "darkMode: "class"" set in Tailwind config (allowing manual toggling of dark mode)
            So for now default to dark mode on first load and dark mode applied by HeroAnimation component when removing SplashScreen when animation starts
            If "darkMode: "class"" not set and the theme is only handled by prefers-color-scheme, it works properly */}
        <body className="h-dvh w-dvw scroll-smooth overflow-x-hidden overflow-y-auto font-nunito text-t-fl-base text-neutral-600 dark:text-neutral-50">
          {/* <DynamicTestViewport /> */}
          <SplashScreen />
          {children}
          <SpeedInsights />
        </body>
      </html>
    )
}
