"use client"

import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import AnimatedButton from "@/components/AnimatedButton"

export default function Contact() {
    const contactButtonIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                <rect width={18} height={14} x={3} y={5} strokeDasharray={64} strokeDashoffset={64} rx={1}>
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.9s" values="64;0"></animate>
                </rect>
                <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5L12 12L21 6.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.6s" values="24;0"></animate>
                </path>
            </g>
        </svg>
    )

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
                            iconAfter={contactButtonIcon}
                            ribbonText="OUVERT À DE NOUVEAUX PROJETS"
                        />
                        {/* TODO icon animation on view */}
                    </div>
                </div>
            </div>
        </section>
    )
}
