"use client"

import { useState, useEffect } from "react"
import AnimatedText from "@/components/Header/AnimatedText"
import Navigation from "@/components/Header/Navigation"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconMail from "@/components/Icons/src/Animated/IconMail"

export default function Header() {
    const [activeSectionId, setActiveSectionId] = useState("home")

    useEffect(() => {
        let sections = []
        let timeouts = []

        const sectionObserver = new IntersectionObserver(
            (sections, observer) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        timeouts[section.target.id] = setTimeout(() => {
                            if (window.innerWidth < 1024) {
                                setActiveSectionId(section.target.id)
                            }
                            // window.location.hash = section.target.id
                        }, 200)
                    } else {
                        clearTimeout(timeouts[section.target.id])
                    }
                })
            },
            { threshold: 0.6 }
        )

        const initObserver = () => {
            sections.forEach((section) => {
                sectionObserver.observe(section)
            })
        }

        setTimeout(() => {
            sections = document.querySelectorAll(".nav-anchor")
            initObserver()
        }, 500) //Timeout because document.querySelectorAll() returns an empty array if triggered too soon

        return () => {
            sectionObserver.disconnect()
            timeouts.forEach((timeout) => clearTimeout(timeout))
        }
    }, [])

    return (
        <header
            id="home"
            className="nav-anchor color-transition lg:bg-custom-400 dark:lg:bg-neutral-800 text-neutral-600 dark:text-neutral-400 lg:text-neutral-50 dark:lg:text-neutral-50 snap-start h-[1px] lg:h-auto"
        >
            {/* 1px height plutôt que hidden sur mobile sinon le snap-start n'est pas pris en compte donc on le peut plus scroller sur cette section et le #home hash link ne fonctionne plus  */}
            <div className="lg:u-container">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline lg:z-10" />
                    <Navigation activeSectionId={activeSectionId} />
                    <AnimatedButton
                        link="mailto:hello@thibautroegiers.dev"
                        linkClass="hidden lg:flex lg:z-10"
                        text="Contactez-moi"
                        iconBefore={
                            <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                <IconMail />
                            </BaseIcon>
                        }
                    />
                </div>
            </div>
        </header>
    )
}
