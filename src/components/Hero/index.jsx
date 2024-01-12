"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
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
                <div className="u-grid grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-none">
                    <div className="flex items-center justify-center mt-s-fl-m lg:mt-0">
                        <div className="flex flex-col gap-s-fl-l-xl">
                            <p className="origin-top-left -rotate-6 font-gloriaHallelujah text-t-fl-l">
                                <motion.span animate={{ rotate: [0, 30, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                    {" "}
                                    {/* TODO ne fonctionne pas */}
                                    👋
                                </motion.span>
                                <span> Hello, moi c’est Thibaut</span>
                            </p>
                            <h1 className="font-paytoneOne text-t-fl-3xl">Développeur web front-end</h1>
                            <p>
                                J’adore &lt;coder /&gt; des sites modernes, dynamiques et{" "}
                                <Link href="https://utopia.fyi/">fluid responsive !</Link>
                            </p>
                        </div>
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
