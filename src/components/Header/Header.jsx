import Link from "next/link"

export default function Header() {
    return (
        <header>
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
