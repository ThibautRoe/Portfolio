import Link from "next/link"
import getCurrentYear from "../../utils/getCurrentYear"

export default function Footer() {
    const year = getCurrentYear()

    return (
        <footer className="bg-neutral-100">
            <div className="u-container py-s-fl-s text-custom-600 text-t-fl-xs flex justify-center">
                <span>
                    Made with{" "}
                    <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        Next.js
                    </Link>{" "}
                    and ❤️ | © {year} <Link href="mailto:hello@thibautroegiers.dev">Thibaut Roegiers</Link>
                </span>
            </div>
        </footer>
    )
}
