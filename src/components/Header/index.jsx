"use client"

import { useEffect } from "react"
import Link from "next/link"
import AnimatedText from "@/components/Header/AnimatedText"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconHome from "@/components/Icons/src/Animated/IconHome"
import IconPerson from "@/components/Icons/src/Animated/IconPerson"
import IconCode from "@/components/Icons/src/Animated/IconCode"
import IconGithubNavBar from "@/components/Icons/src/Animated/IconGithubNavBar"
import IconMail from "@/components/Icons/src/Animated/IconMail"

export default function Header() {
    useEffect(() => {
        let sections = {}
        let navLi = {}
        let timeouts = []

        const highlightNavLi = (currentSectionId) => {
            navLi.forEach((li) => {
                li.classList.remove("text-neutral-800", "dark:text-neutral-100", "bg-custom-200/80", "dark:bg-neutral-600/95")
                if (li.querySelector("a") && li.querySelector("a").href.includes(currentSectionId)) {
                    li.classList.add("text-neutral-800", "dark:text-neutral-100", "bg-custom-200/80", "dark:bg-neutral-600/95")
                }
            })
        }

        const sectionObserver = new IntersectionObserver(
            (sections, observer) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        timeouts[section.target.id] = setTimeout(() => {
                            if (window.innerWidth < 1024) {
                                highlightNavLi(section.target.id)
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
            navLi = document.querySelectorAll("nav ul li")
            initObserver()
        }, 500) //Timeout because document.querySelectorAll() returns an empty array if triggered too soon

        return () => {
            sectionObserver.disconnect()
            timeouts.forEach((timeout) => clearTimeout(timeout))
        }
    }, [])

    return (
        <header id="home" className="nav-anchor lg:bg-custom-400 dark:lg:bg-neutral-800 snap-start h-[1px] lg:h-auto">
            {/* 1px height plutôt que hidden sur mobile sinon le snap-start n'est pas pris en compte donc on le peut plus scroller sur cette section et le #home hash link ne fonctionne plus  */}
            <div className="lg:u-container">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline lg:z-10" />
                    <nav className="fixed lg:static bottom-0 lg:bottom-auto z-40 lg:z-10 w-full lg:w-auto text-t-fl-s lg:text-t-fl-base lg:font-bold text-neutral-600 dark:text-neutral-400 lg:text-neutral-50 dark:lg:text-neutral-50 border-t-[1px] lg:border-0 border-t-neutral-300/70 dark:border-t-neutral-800/90 bg-neutral-100/80 dark:bg-neutral-700/95 lg:bg-custom-400 dark:lg:bg-neutral-800 flex flex-grow justify-center">
                        <ul className="flex flex-grow items-center max-w-[600px] lg:max-w-full lg:justify-end lg:gap-s-fl-l">
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#home" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <BaseIcon className="lg:hidden" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <IconHome />
                                    </BaseIcon>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="/#about" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <BaseIcon className="lg:hidden" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <IconPerson />
                                    </BaseIcon>
                                    <span className="wavy-underline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:bg-[length:100%_100%] after:opacity-0 hover:after:opacity-100 lg:after:transition-opacity lg:after:duration-500">
                                        Présentation
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#skills" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <BaseIcon className="lg:hidden" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <IconCode />
                                    </BaseIcon>
                                    <span className="wavy-underline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:bg-[length:100%_100%] after:opacity-0 hover:after:opacity-100 lg:after:transition-opacity lg:after:duration-500">
                                        Compétences
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#projects" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <BaseIcon className="lg:hidden" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <IconGithubNavBar />
                                    </BaseIcon>
                                    <span className="wavy-underline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:bg-[length:100%_100%] after:opacity-0 hover:after:opacity-100 lg:after:transition-opacity lg:after:duration-500">
                                        Réalisations
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#contact" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <BaseIcon className="lg:hidden" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <IconMail />
                                    </BaseIcon>
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
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
