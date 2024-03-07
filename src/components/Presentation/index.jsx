"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { InView } from "react-intersection-observer"
import PresentationText from "@/components/presentation/presentation-text"
import BaseIcon from "@/components/ui/icons/BaseIcon"
import IconDownload from "@/components/ui/icons/src/AnimatedInfiniteLoop/IconDownload"
import CV from "@/public/images/cv.webp"

export default function Presentation() {
    useEffect(() => {
        function handleResizeAbout() {
            const nav = document.querySelector("nav")
            const aboutSection = document.getElementById("about")

            if (nav && aboutSection) {
                aboutSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
            }
        }

        handleResizeAbout()

        window.addEventListener("resize", handleResizeAbout)

        return () => {
            window.removeEventListener("resize", handleResizeAbout)
        }
    }, [])

    return (
        <section
            id="about"
            className="nav-anchor color-transition bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-50 snap-start flex min-h-screen"
        >
            <div className="u-container flex flex-col gap-s-fl-l-xl w-full">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`text-center font-paytoneOne text-t-fl-xl motion-reduce:animate-none animate-fade-down animate-delay-300 ${
                                inView ? "animate-play" : "animate-stop"
                            }`}
                        >
                            Présentation
                        </h2>
                    )}
                </InView>
                <div className="flex-grow u-grid grid-rows-[auto_max-content] lg:grid-rows-none lg:grid-cols-[auto_max-content] lg:gap-s-fl-2xl">
                    <InView triggerOnce>
                        {({ inView, ref, entry }) => (
                            <div
                                ref={ref}
                                className={`self-center motion-reduce:animate-none animate-fade-right animate-delay-300 ${
                                    inView ? "animate-play" : "animate-stop"
                                }`}
                            >
                                <PresentationText />
                            </div>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref, entry }) => (
                            <div
                                ref={ref}
                                className={`flex justify-center items-center motion-reduce:animate-none animate-fade-left animate-delay-300 ${
                                    inView ? "animate-play" : "animate-stop"
                                }`}
                            >
                                <div className="color-transition flex lg:flex-col items-center gap-s-fl-m lg:p-s-fl-m text-neutral-600 dark:text-neutral-50 lg:bg-neutral-200/50 dark:lg:bg-neutral-700/20 lg:border-neutral-600 lg:border-2 lg:border-dashed lg:rounded-s-fl-2xs">
                                    <h3 className="font-bold">Téléchargez mon CV</h3>
                                    <Link
                                        href="/cv_thibaut_roegiers_2024.pdf"
                                        aria-label="Téléchargez mon CV"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.div
                                            tabIndex="-1"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            className="rounded-s-fl-2xs px-s-fl-xs py-s-fl-3xs text-neutral-50 bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800 shadow-lg"
                                        >
                                            <BaseIcon width="1em" height="1em" viewBox="0 0 24 24">
                                                <IconDownload />
                                            </BaseIcon>
                                        </motion.div>
                                    </Link>
                                    <Link
                                        href="/cv_thibaut_roegiers_2024.pdf"
                                        aria-label="Téléchargez mon CV"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full aspect-[21/29.7] hidden lg:block"
                                    >
                                        <motion.div
                                            tabIndex="-1"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                src={CV}
                                                alt="CV Thibaut Roegiers"
                                                className="rounded-s-fl-2xs shadow-lg grayscale hover:grayscale-0"
                                            />
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    )
}
