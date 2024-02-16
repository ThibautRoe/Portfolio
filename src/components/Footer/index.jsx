"use client"

import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"
import Link from "next/link"
import getCurrentYear from "@/utils/getCurrentYear"

export default function Footer() {
    const year = getCurrentYear()

    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900">
            <InView triggerOnce>
                {({ inView, ref, entry }) => (
                    <div
                        ref={ref}
                        className={`u-container py-s-fl-s text-t-fl-xs flex justify-center motion-safe:animate-fade-up motion-safe:animate-delay-300 ${
                            inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                        }`}
                    >
                        <div>
                            <span className="text-custom-600 dark:text-neutral-50">Made with </span>
                            <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                <motion.span
                                    tabIndex="-1"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="inline-block underline decoration-dotted underline-offset-[0.175em] text-custom-600 dark:text-neutral-50 hover:text-custom-700 dark:hover:text-custom-400 active:text-custom-800 dark:active:text-custom-500"
                                >
                                    Next.js
                                </motion.span>
                            </Link>
                            <span className="text-custom-600 dark:text-neutral-50"> and ❤️ | © {year} </span>
                            <Link href="mailto:hello@thibautroegiers.dev" target="_blank" rel="noopener noreferrer">
                                <motion.span
                                    tabIndex="-1"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="inline-block underline decoration-dotted underline-offset-[0.175em] text-custom-600 dark:text-neutral-50 hover:text-custom-700 dark:hover:text-custom-400 active:text-custom-800 dark:active:text-custom-500"
                                >
                                    Thibaut Roegiers
                                </motion.span>
                            </Link>
                        </div>
                    </div>
                )}
            </InView>
        </footer>
    )
}
