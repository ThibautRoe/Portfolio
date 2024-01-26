"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import getCurrentYear from "../../utils/getCurrentYear"

export default function Footer() {
    const year = getCurrentYear()

    return (
        <footer className="bg-neutral-100">
            <div className="u-container py-s-fl-s text-custom-600 text-t-fl-xs flex justify-center">
                <div>
                    <span>Made with </span>
                    <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="inline-block underline decoration-dotted underline-offset-[0.175em] hover:text-custom-700 active:text-custom-800"
                        >
                            Next.js
                        </motion.span>
                    </Link>
                    <span> and ❤️ | © {year} </span>
                    <Link href="mailto:hello@thibautroegiers.dev">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="inline-block underline decoration-dotted underline-offset-[0.175em] hover:text-custom-700 active:text-custom-800"
                        >
                            Thibaut Roegiers
                        </motion.span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
