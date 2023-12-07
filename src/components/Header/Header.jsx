"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <header>
            <nav>
                <p>Logo</p>
                <ul>
                    <li><Link href="/">Accueil</Link></li>
                    {pathname === "/" && (
                        <>
                            <li><Link href="#skills">Compétences</Link></li>
                            <li><Link href="#projects">Réalisations</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}