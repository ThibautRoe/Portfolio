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
            <div className="u-container py-s-fl-l">
                <div className="gap-s-fl-l flex items-center">
                    <p className="text-t-fl-2xl">&lt;Thibaut /&gt;</p>
                    <nav className="flex-grow">
                        <ul className="gap-s-fl-l flex items-center justify-end">
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
                    <div>
                        {/* TODO design bouton et header mobile */}
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} className="text-t-fl-l" />
                        </span>
                        <Link href="mailto:hello@thibautroegiers.dev" className="text-t-fl-l pl-s-fl-xs pr-s-fl-m py-s-fl-2xs">
                            Contactez-moi
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
