"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faCode, faDesktop, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import AnimatedText from "@/components/Header/AnimatedText"

export default function Header() {
    useEffect(() => {
        let sections = {}
        let navLi = {}
        let timeouts = {}

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
        }, 500) //Timeout because document.querySelectorAll(".nav-anchor") returns an empty array if triggered too soon

        return () => {
            sectionObserver.disconnect()
        }
    }, [])

    return (
        <header id="home" className="nav-anchor lg:bg-custom-400 dark:lg:bg-neutral-800 snap-start h-[1px] lg:h-auto">
            {/* 1px height plutôt que hidden sur mobile sinon le snap-start n'est pas pris en compte donc on le peut plus scroller sur cette section et le #home hash link ne fonctionne plus  */}
            <div className="lg:u-container">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline" />
                    <nav className="fixed lg:static bottom-0 lg:bottom-auto z-50 lg:z-auto w-full lg:w-auto text-t-fl-2xs lg:text-t-fl-base text-neutral-600 dark:text-neutral-400 lg:text-neutral-50 dark:lg:text-neutral-50 border-t-[1px] lg:border-0 border-t-neutral-300/70 dark:border-t-neutral-800/90 bg-neutral-100/80 dark:bg-neutral-700/95 lg:bg-custom-400 dark:lg:bg-neutral-800 lg:font-bold flex flex-grow justify-center">
                        <ul className="flex flex-grow items-center max-w-[600px] lg:max-w-full lg:justify-end lg:gap-s-fl-l">
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#home" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="/#about" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100">
                                        Présentation
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#skills" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100">
                                        Compétences
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#projects" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </span>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100">
                                        Réalisations
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#contact" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </span>
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href="mailto:hello@thibautroegiers.dev" target="_blank" rel="noopener noreferrer" className="hidden lg:flex">
                        <motion.div
                            tabIndex="-1"
                            className="flex items-center rounded-full bg-custom-600 px-s-fl-m py-s-fl-3xs shadow-md hover:bg-custom-700 hover:shadow-lg active:bg-custom-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <button tabIndex="-1" className="flex items-center gap-s-fl-s text-t-fl-l">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Contactez-moi</span>
                            </button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
