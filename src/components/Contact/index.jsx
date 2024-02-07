"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    useEffect(() => {
        function handleResizeContact() {
            const footer = document.querySelector("footer")
            const nav = document.querySelector("nav")
            const contactSection = document.getElementById("contact")

            if (footer && nav) {
                footer.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
            }

            if (footer && contactSection) {
                contactSection.style.minHeight = `calc(100dvh - ${footer.offsetHeight}px)`
            }
        }

        handleResizeContact()

        window.addEventListener("resize", handleResizeContact)

        return () => {
            window.removeEventListener("resize", handleResizeContact)
        }
    }, [])

    return (
        <section id="contact" className="nav-anchor bg-neutral-100 dark:bg-neutral-800 snap-start flex flex-col min-h-screen">
            <div className="u-container flex flex-grow items-center justify-center text-t-fl-xl text-custom-600">
                <div className="relative">
                    <div className="absolute aspect-square rounded-full border-2 border-custom-600 h-full animate-[spin_8s_linear_infinite]">
                        <FontAwesomeIcon
                            icon={faHandshake}
                            className="absolute bg-neutral-100 dark:bg-neutral-800 px-s-fl-3xs -top-s-fl-xs left-[calc(2.9*var(--space-xl-2xl))]"
                        />
                    </div>
                    <div className="flex aspect-square flex-col items-center justify-center gap-s-fl-2xl px-s-fl-2xl-3xl">
                        <p className="font-paytoneOne text-t-fl-2xl text-custom-400 dark:text-neutral-50">Echangeons !</p>
                        <Link href="mailto:hello@thibautroegiers.dev" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                tabIndex="-1"
                                className="rounded-full bg-custom-600 hover:bg-custom-700 active:bg-custom-800 shadow-md hover:shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <button
                                    tabIndex="-1"
                                    className="relative flex items-center gap-s-fl-s px-s-fl-l py-s-fl-2xs font-bold text-neutral-50"
                                >
                                    <span className="absolute -left-s-fl-xs -top-s-fl-xs px-s-fl-xs py-s-fl-3xs text-t-fl-xs text-neutral-700 z-10 after:-z-10 after:absolute after:inset-0 after:skew-x-[-30deg] after:bg-custom-300">
                                        OUVERT À DE NOUVEAUX PROJETS
                                    </span>
                                    <span>CONTACT</span>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
