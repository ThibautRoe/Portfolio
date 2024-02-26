"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconHandshake from "@/components/Icons/src/NotAnimated/IconHandshake"
import IconMail from "@/components/Icons/src/AnimatedOnRender/IconMail"

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
        <section id="contact" className="nav-anchor color-transition bg-neutral-100 dark:bg-neutral-900 snap-start flex min-h-screen">
            <div className="u-container flex flex-grow justify-center items-center">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div
                            ref={ref}
                            className={`relative my-s-fl-s-m motion-safe:animate-fade-down motion-safe:animate-delay-300 ${
                                inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                            }`}
                        >
                            <div className="absolute aspect-square rounded-full border-2 border-custom-600 dark:border-custom-700 h-full animate-[spin_8s_linear_infinite]">
                                <BaseIcon
                                    className="absolute color-transition text-t-fl-xl text-custom-600 dark:text-custom-700 bg-neutral-100 dark:bg-neutral-900 px-s-fl-3xs left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    width="2em"
                                    height="1.6em"
                                    viewBox="0 0 640 512"
                                >
                                    <IconHandshake />
                                </BaseIcon>
                            </div>
                            <div className="flex aspect-square flex-col items-center justify-center gap-s-fl-2xl px-s-fl-xl-3xl">
                                <h2 className="font-paytoneOne text-t-fl-2xl color-transition text-neutral-500 dark:text-neutral-50">
                                    Echangeons !
                                </h2>
                                <AnimatedButton
                                    link="mailto:hello@thibautroegiers.dev"
                                    ariaLabel="Contactez-moi"
                                    text="CONTACT"
                                    bigText
                                    iconAfter={
                                        <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                            <IconMail />
                                        </BaseIcon>
                                    }
                                    ribbonText="OUVERT À DE NOUVEAUX PROJETS"
                                />
                            </div>
                        </div>
                    )}
                </InView>
            </div>
        </section>
    )
}
