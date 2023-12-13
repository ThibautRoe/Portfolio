"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Header() {
    const headerRef = useRef(null)

    useEffect(() => {
        const updateScrollPadding = () => {
            const headerHeight = headerRef.current.offsetHeight
            document.documentElement.style.setProperty("--scroll-padding", headerHeight - 1 + "px")
        }

        updateScrollPadding()

        window.addEventListener("scroll", updateScrollPadding)

        return () => {
            window.removeEventListener("scroll", updateScrollPadding)
        }
    }, [])

    return (
        <header ref={headerRef} className="sticky top-0 z-50 h-20 bg-slate-300">
            <nav className="flex justify-between">
                <p>&lt;Thibaut /&gt;</p>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="#skills">Compétences</Link>
                    </li>
                    <li>
                        <Link href="#projects">Réalisations</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
