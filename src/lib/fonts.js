import { Nunito, Paytone_One, Gloria_Hallelujah } from "next/font/google"

export const nunito = Nunito({
    style: ["normal", "italic"],
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-nunito",
})

export const paytoneOne = Paytone_One({ subsets: ["latin"], weight: "400", variable: "--font-paytoneOne" })

export const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"], weight: "400", variable: "--font-gloriaHallelujah" })
