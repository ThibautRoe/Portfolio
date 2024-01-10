"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faHouse, faUser, faCode, faDesktop, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"

export default function Header() {
    return (
        <header id="home" className="bg-custom-400 snap-start">
            <div className="lg:u-container py-s-fl-l">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline" />
                    {/* <p className="header-text hidden text-t-fl-2xl lg:block">&lt;Thibaut /&gt;</p> */}
                    <nav className="fixed bottom-0 z-50 flex flex-grow border-t-[1px] border-t-neutral-300/60 bg-neutral-100/60 text-t-fl-s text-neutral-700 lg:static lg:z-0 lg:border-0 lg:bg-custom-400 lg:text-t-fl-base lg:font-bold lg:text-neutral-50 w-full justify-center lg:w-auto">
                        <ul className="flex max-w-[600px] flex-grow items-center lg:max-w-full lg:justify-end lg:gap-s-fl-l">
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#home" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="/#about" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <span>Présentation</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#skills" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <span>Compétences</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#projects" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </span>
                                    <span>Réalisations</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#contact" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs lg:hidden">
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
                            className="flex items-center rounded-full bg-custom-600 px-s-fl-m drop-shadow-md hover:bg-custom-700 hover:drop-shadow-lg active:bg-custom-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <button className="flex items-center gap-s-fl-s text-t-fl-l">
                                <FontAwesomeIcon icon={faChevronRight} />
                                <span>Contactez-moi</span>
                            </button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
