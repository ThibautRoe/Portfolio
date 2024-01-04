"use client"

import { useEffect } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import "./hero.css"

const DynamicAnimation = dynamic(() => import("./Animation"), { ssr: false })

export default function Hero() {
    function handleResizeHero() {
        const header = document.querySelector("header")
        const nav = document.querySelector("nav")
        const heroSection = document.getElementById("hero")

        if (header && heroSection) {
            heroSection.style.height = `calc(100dvh - ${header.offsetHeight}px)`
        }

        if (nav && heroSection) {
            heroSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
        }
    }

    useEffect(() => {
        handleResizeHero()

        window.addEventListener("resize", handleResizeHero)

        return () => {
            window.removeEventListener("resize", handleResizeHero)
        }
    }, [])

    return (
        <section id="hero" className="bg-gradient-to-b from-custom-400 to-custom-300 h-dvh">
            <div className="u-container grid grid-rows-[1fr_auto] h-full">
                <div className="lg:u-grid lg:grid-cols-2 grid grid-rows-2 lg:grid-rows-none flex-grow">
                    <div className="flex flex-col justify-center gap-s-fl-xl flex-grow">
                        <p className="origin-top-left -rotate-6 font-gloriaHallelujah text-t-fl-l">👋 Hello, moi c’est Thibaut</p>
                        <h1 className="font-paytoneOne text-t-fl-3xl">Développeur web front-end</h1>
                        <p>
                            J’adore &lt;coder /&gt; des sites modernes, dynamiques et{" "}
                            <Link href="https://utopia.fyi/">fluid responsive !</Link>
                        </p>
                    </div>
                    <DynamicAnimation />
                </div>
                <div className="hidden sm:flex justify-center">
                    <div className="animated-mouse">
                        <div className="animated-mouse-pointer"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
