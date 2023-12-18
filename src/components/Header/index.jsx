// "use client" // Use if updateScrollPadding needed

// import { useEffect, useRef } from "react" // Use if updateScrollPadding needed
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faHouse, faUser, faCode, faDesktop, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    // const headerRef = useRef(null) // Use if updateScrollPadding needed

    /*  useEffect(() => {
        const updateScrollPadding = () => {
            const headerHeight = headerRef.current.offsetHeight
            document.documentElement.style.setProperty("--scroll-padding", headerHeight - 1 + "px")
        }

        updateScrollPadding()

        window.addEventListener("scroll", updateScrollPadding)

        return () => {
            window.removeEventListener("scroll", updateScrollPadding)
        }
    }, []) */

    return (
        <header /* ref={headerRef} */ className="bg-custom-400 ">
            <div className="lg:u-container py-s-fl-l ">
                <div className="flex gap-s-fl-l">
                    <p className="hidden text-t-fl-2xl lg:block">&lt;Thibaut /&gt;</p>
                    <nav className="fixed bottom-0 flex w-full flex-grow items-center justify-center border-t-[1px] border-t-neutral-300/60 bg-neutral-100/60 text-t-fl-s text-neutral-700 lg:justify-end lg:border-0 lg:text-t-fl-base lg:font-bold lg:text-neutral-50">
                        <ul className="flex max-w-[600px] flex-grow items-center lg:gap-s-fl-l">
                            <li className="flex-grow">
                                <Link href="/" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow">
                                <Link href="/#about" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <span>Présentation</span>
                                </Link>
                            </li>
                            <li className="flex-grow">
                                <Link href="#skills" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <span>Compétences</span>
                                </Link>
                            </li>
                            <li className="flex-grow">
                                <Link href="#projects" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </span>
                                    <span>Réalisations</span>
                                </Link>
                            </li>
                            <li className="flex-grow">
                                <Link href="#contact" className="flex flex-col items-center gap-y-[3px] p-s-fl-2xs lg:hidden">
                                    <span className="lg:hidden">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </span>
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link
                        href="mailto:hello@thibautroegiers.dev"
                        className="active:bg-custom-800 hidden transform-gpu items-center rounded-full bg-custom-600 px-s-fl-m drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-custom-700 hover:drop-shadow-lg lg:flex"
                    >
                        <button className="flex items-center gap-s-fl-s text-t-fl-l">
                            <FontAwesomeIcon icon={faChevronRight} />
                            <span>Contactez-moi</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
