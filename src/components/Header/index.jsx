// "use client" // Use if updateScrollPadding needed

// import { useEffect, useRef } from "react" // Use if updateScrollPadding needed
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

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
        <header /* ref={headerRef} */ className="bg-custom-400">
            <div className="u-container py-s-fl-l font-bold">
                <div className="flex items-stretch gap-s-fl-l">
                    <p className="text-t-fl-2xl">&lt;Thibaut /&gt;</p>
                    <nav className="flex flex-grow items-center justify-end">
                        <ul className="flex items-center gap-s-fl-l">
                            <li>
                                <Link href="/#about">Présentation</Link>
                            </li>
                            <li>
                                <Link href="#skills">Compétences</Link>
                            </li>
                            <li>
                                <Link href="#projects">Réalisations</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link
                        href="mailto:hello@thibautroegiers.dev"
                        className="active:bg-custom-800 flex transform-gpu items-center rounded-full bg-custom-600 px-s-fl-m drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-custom-700 hover:drop-shadow-lg"
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
