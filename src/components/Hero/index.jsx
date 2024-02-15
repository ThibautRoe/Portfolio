"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { InView } from "react-intersection-observer"
import Loader from "@/components/Loader"
// import HeroAnimation from "@/components/Hero/HeroAnimation.jsx"
import AnimatedMouse from "@/components/AnimatedMouse"
import ToggleDarkModeButton from "@/components/ToggleDarkModeButton"
import ConfettiBoom from "@/components/ConfettiBoom"
import useReduceMotion from "@/hooks/useReduceMotion"
import "./Hero.css"

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
    const frontendRef = useRef(null)
    const [frontendCoordinates, setFrontendCoordinates] = useState({ x: 0, y: 0 })
    const [displayConfetti, setDisplayConfetti] = useState(false)
    const reduceMotion = useReduceMotion()

    useEffect(() => {
        function handleSnapMandatory() {
            const sections = document.querySelectorAll("section")
            let allSectionsTallEnough = true

            sections.forEach((section) => {
                if (section.offsetHeight > window.innerHeight) {
                    document.body.classList.remove("snap-mandatory", "snap-y")
                    allSectionsTallEnough = false
                } else {
                    allSectionsTallEnough = allSectionsTallEnough && section.offsetHeight < window.innerHeight
                }

                if (allSectionsTallEnough) {
                    document.body.classList.add("snap-mandatory", "snap-y")
                }
            })
        }

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

        function handleResize() {
            handleResizeHero()
            setTimeout(() => handleSnapMandatory(), 100) //Timeout because on small height screens it can be triggered before all elements have resized and the section is the proper height
        }

        setTimeout(() => {
            handleSnapMandatory()
        }, 600) //Timeout because document.querySelectorAll() returns an empty array if triggered too soon

        handleResizeHero()

        window.addEventListener("resize", handleResize)
        window.addEventListener("orientationChange", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationChange", handleResize)
        }
    }, [])

    function getFrontendCoordinates() {
        if (frontendRef.current) {
            const frontEndText = frontendRef.current.getBoundingClientRect()
            const heroSection = document.getElementById("hero")

            setFrontendCoordinates({
                x: (frontEndText.left + frontEndText.width / 2) / heroSection.offsetWidth,
                y: frontEndText.top / heroSection.offsetHeight,
            })
        }
    }

    function handleConfetti() {
        if (!reduceMotion && !displayConfetti) {
            getFrontendCoordinates()
            setDisplayConfetti(true)
            setTimeout(() => setDisplayConfetti(false), 4000)
        }
    }

    return (
        <section
            id="hero"
            className="bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-800 dark:to-neutral-700 flex min-h-screen"
        >
            <div className="relative u-container grid grid-rows-[1fr_auto] flex-grow">
                <div className="u-grid grid-rows-[auto_auto] lg:grid-cols-[1fr_1fr] lg:grid-rows-none">
                    <div className="flex items-center justify-center mt-s-fl-m lg:mt-0">
                        <InView triggerOnce>
                            {({ inView, ref, entry }) => (
                                <div
                                    ref={ref}
                                    className={`flex flex-col gap-s-fl-l-xl motion-safe:animate-fade-up motion-safe:animate-delay-300 ${
                                        inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                                    }`}
                                >
                                    <div className="origin-top-left -rotate-6 font-gloriaHallelujah text-t-fl-l">
                                        <div className="inline-block animate-[helloAnimation_2s_ease-in-out_infinite]">👋</div>
                                        <span> Hello, moi c’est Thibaut</span>
                                    </div>
                                    <h1 className="font-paytoneOne text-t-fl-3xl">
                                        Développeur web{" "}
                                        <span
                                            ref={frontendRef}
                                            onMouseEnter={handleConfetti}
                                            className="transparent-fill hover:text-neutral-50"
                                        >
                                            front-end
                                        </span>
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
                            )}
                        </InView>
                    </div>
                    {/* <HeroAnimation /> */}
                    <DynamicHeroAnimation />
                </div>
                <div className="flex justify-center">
                    <AnimatedMouse />
                </div>
                <ToggleDarkModeButton />
            </div>
            {displayConfetti && <ConfettiBoom position={frontendCoordinates} />}
        </section>
    )
}
