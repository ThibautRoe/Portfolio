"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Loader from "@/components/Loader"
// import HeroAnimation from "@/components/Hero/HeroAnimation.jsx"
import "./hero.css"

import dynamic from "next/dynamic"
const DynamicHeroAnimation = dynamic(() => import("@/components/Hero/HeroAnimation.jsx"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center">
            <Loader />
        </div>
    ),
})

export default function Hero() {
    useEffect(() => {
        function handleResizeHero() {
            const header = document.querySelector("header")
            const nav = document.querySelector("nav")
            const heroSection = document.getElementById("hero")

            if (header && heroSection) {
                heroSection.style.minHeight = `calc(100dvh - ${header.offsetHeight}px)`
            }

            if (nav && heroSection) {
                heroSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
            }
        }

        handleResizeHero()

        window.addEventListener("resize", handleResizeHero)

        return () => {
            window.removeEventListener("resize", handleResizeHero)
        }
    }, [])

    return (
        <section
            id="hero"
            className="bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-800 dark:to-neutral-700 flex min-h-screen"
        >
            <div className="u-container grid grid-rows-[1fr_auto] flex-grow">
                <div className="u-grid grid-rows-[auto_auto] lg:grid-cols-[1fr_1fr] lg:grid-rows-none">
                    <div className="flex items-center justify-center mt-s-fl-m lg:mt-0">
                        <div className="flex flex-col gap-s-fl-l-xl">
                            <div className="origin-top-left -rotate-6 font-gloriaHallelujah text-t-fl-l">
                                <div className="inline-block animate-[helloAnimation_2s_ease-in-out_infinite]">👋</div>
                                <span> Hello, moi c’est Thibaut</span>
                            </div>
                            <h1 className="font-paytoneOne text-t-fl-3xl">
                                Développeur web <span className="front-end-text transparent-fill hover:text-neutral-50">front-end</span>
                            </h1>
                            <div>
                                <span>J’adore &lt;coder /&gt; des sites modernes, dynamiques et </span>
                                <Link href="https://utopia.fyi/" target="_blank" rel="noopener noreferrer">
                                    <motion.span
                                        tabIndex="-1"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="inline-block underline decoration-dotted underline-offset-[0.175em] hover:text-custom-700 dark:hover:text-custom-400 active:text-custom-800 dark:active:text-custom-500"
                                    >
                                        fluid responsive
                                    </motion.span>
                                </Link>
                                <span> !</span>
                            </div>
                        </div>
                    </div>
                    {/* <HeroAnimation /> */}
                    <DynamicHeroAnimation />
                </div>
                <div className="flex justify-center">
                    <div className="animated-mouse relative aspect-[9/16] w-s-fl-m rounded-s-fl-xs border-2 border-neutral-50">
                        <div className="animated-mouse-pointer absolute left-1/2 top-[70%] -translate-x-1/2 aspect-square w-s-fl-3xs rounded-full bg-neutral-50"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
