"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faCode, faDesktop, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import AnimatedText from "@/components/Header/AnimatedText"

export default function Header() {
    const [hash, setHash] = useState(window.location.hash)
    const params = useParams()

    useEffect(() => {
        const handleIntersection = (items) => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    window.location.hash = item.target.id
                    setHash(window.location.hash)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 1,
        })

        const handleObserver = () => {
            setTimeout(() => {
                const sections = document.querySelectorAll(".nav-anchor")
                sections.forEach((section) => {
                    observer.observe(section)
                })
            }, 500) //Timeout because document.querySelectorAll(".nav-anchor") returns an empty array if triggered too soon
        }

        handleObserver()

        return () => {
            observer.disconnect()
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
                                <Link
                                    href="#home"
                                    className={`${
                                        hash === "#home" ? "text-neutral-800 bg-custom-100/60" : ""
                                    } flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden`}
                                >
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link
                                    href="/#about"
                                    className={`${
                                        hash === "#about" ? "text-neutral-800 bg-custom-100/60" : ""
                                    } flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs`}
                                >
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100">
                                        Présentation
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link
                                    href="#skills"
                                    className={`${
                                        hash === "#skills" ? "text-neutral-800 bg-custom-100/60" : ""
                                    } flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs`}
                                >
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100">
                                        Compétences
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link
                                    href="#projects"
                                    className={`${
                                        hash === "#projects" ? "text-neutral-800 bg-custom-100/60" : ""
                                    } flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs`}
                                >
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </span>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100">
                                        Réalisations
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link
                                    href="#contact"
                                    className={`${
                                        hash === "#contact" ? "text-neutral-800 bg-custom-100/60" : ""
                                    } flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden`}
                                >
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
