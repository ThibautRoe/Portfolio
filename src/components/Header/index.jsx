"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faCode, faDesktop, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import AnimatedText from "@/components/Header/AnimatedText"

export default function Header() {
    useEffect(() => {
        let sections
        let navLi

        const handleNavLiHighlight = () => {
            let current = ""

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                if (document.body.scrollTop >= sectionTop - 10) {
                    current = section.getAttribute("id")
                }
            })

            if (window.innerWidth < 1024) {
                navLi.forEach((li) => {
                    li.classList.remove("text-neutral-800", "bg-custom-100/60")
                    if (li.querySelector("a") && li.querySelector("a").href.includes(current)) {
                        li.classList.add("text-neutral-800", "bg-custom-100/60")
                    }
                })
            }

            // window.location.hash = current
        }

        setTimeout(() => {
            sections = document.querySelectorAll(".nav-anchor")
            navLi = document.querySelectorAll("nav ul li")
            handleNavLiHighlight()
            document.body.addEventListener("scroll", handleNavLiHighlight) // document.body instead of window because of the trick in layout.jsx to get mobile browser UI always visible
        }, 500) // Timeout because document.querySelectorAll(".nav-anchor") returns an empty array if triggered too soon

        return () => {
            document.body.removeEventListener("scroll", handleNavLiHighlight)
        }
    }, [])

    return (
        <header id="home" className="nav-anchor bg-custom-400 snap-start h-[1px] lg:h-auto">
            {/* 1px plutôt que hidden sur mobile sinon le #home hash link ne fonctionne plus */}
            <div className="lg:u-container">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline" />
                    <nav className="fixed bottom-0 z-50 flex flex-grow justify-center w-full border-t-[1px] text-t-fl-s text-neutral-600 border-t-neutral-300/60 bg-neutral-100/60 lg:static lg:z-0 lg:w-auto lg:border-0 lg:text-t-fl-base lg:font-bold lg:text-neutral-50 lg:bg-custom-400">
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
                            className="flex items-center rounded-full bg-custom-600 px-s-fl-m py-s-fl-3xs shadow-md hover:bg-custom-700 hover:shadow-lg active:bg-custom-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <button className="flex items-center gap-s-fl-s text-t-fl-l">
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
