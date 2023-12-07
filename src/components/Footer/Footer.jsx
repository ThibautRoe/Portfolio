import Link from 'next/link'
import getCurrentYear from '../../utils/getCurrentYear'

export default function Footer() {
    const year = getCurrentYear()

    return (
        <footer>
            <span>Made with <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</Link> and ❤️ | © {year} Thibaut Roegiers</span>
        </footer>
    )
}