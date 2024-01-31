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
        setHash(window.location.hash)
    }, [params])

    return (
        <header id="home" className="bg-custom-400 snap-start h-[1px] lg:h-auto">
            {/* 1px plutôt que hidden sur mobile sinon le #home hash link ne fonctionne plus */}
            <div className="lg:u-container">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline" />
                    <nav className="fixed bottom-0 z-50 flex flex-grow justify-center w-full border-t-[1px] text-t-fl-s text-neutral-700 border-t-neutral-300/60 bg-neutral-100/60 lg:static lg:z-0 lg:w-auto lg:border-0 lg:text-t-fl-base lg:font-bold lg:text-neutral-50 lg:bg-custom-400">
                        <ul className="flex flex-grow items-center max-w-[600px] lg:max-w-full lg:justify-end lg:gap-s-fl-l">
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#home" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <span className={`${hash === "#home" ? "font-bold" : ""}`}>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="/#about" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <span
                                        className={`${
                                            hash === "#about" ? "font-bold" : ""
                                        } wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100`}
                                    >
                                        Présentation
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#skills" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <span
                                        className={`${
                                            hash === "#skills" ? "font-bold" : ""
                                        } wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100`}
                                    >
                                        Compétences
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#projects" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </span>
                                    <span
                                        className={`${
                                            hash === "#projects" ? "font-bold" : ""
                                        } wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] hover:after:opacity-100`}
                                    >
                                        Réalisations
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#contact" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </span>
                                    <span className={`${hash === "#contact" ? "font-bold" : ""}`}>Contact</span>
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
