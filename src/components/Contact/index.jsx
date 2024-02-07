"use client"

import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import AnimatedButton from "@/components/AnimatedButton"

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
            <div className="u-container flex flex-grow items-center justify-center">
                <div className="relative">
                    <div className="absolute aspect-square rounded-full border-2 border-custom-600 h-full animate-[spin_8s_linear_infinite]">
                        <FontAwesomeIcon
                            icon={faHandshake}
                            className="absolute text-t-fl-xl text-custom-600 bg-neutral-100 dark:bg-neutral-800 px-s-fl-3xs -top-s-fl-xs left-[calc(2.9*var(--space-xl-2xl))]"
                        />
                    </div>
                    <div className="flex aspect-square flex-col items-center justify-center gap-s-fl-2xl px-s-fl-2xl-3xl">
                        <p className="font-paytoneOne text-t-fl-2xl text-custom-400 dark:text-neutral-50">Echangeons !</p>
                        <AnimatedButton
                            link="mailto:hello@thibautroegiers.dev"
                            text="CONTACT"
                            bigText
                            iconAfter={faPaperPlane}
                            ribbonText="OUVERT À DE NOUVEAUX PROJETS"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
