"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function AnimatedButton(props) {
    const { link, ariaLabel, linkClass, text, bigText, iconBefore, iconAfter, ribbonText, systemButton } = props

    return (
        <Link
            href={link}
            aria-label={ariaLabel ? ariaLabel : ""}
            target={systemButton ? "" : "_blank"}
            rel="noopener noreferrer"
            className={linkClass ? linkClass : ""}
        >
            <motion.div
                className={`color-transition flex items-center gap-s-fl-s rounded-full font-bold text-neutral-600 dark:text-neutral-50 bg-custom-600 dark:bg-custom-700 hover:bg-custom-700 dark:hover:bg-custom-800 active:bg-custom-800 dark:active:bg-custom-900 shadow-md hover:shadow-lg ${
                    bigText ? "text-t-fl-xl px-s-fl-l py-s-fl-xs" : "text-t-fl-l px-s-fl-m py-s-fl-2xs"
                } ${ribbonText ? "relative" : ""}`}
                tabIndex="-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                {ribbonText ? (
                    <span className="absolute -left-s-fl-xs -top-s-fl-xs px-s-fl-xs py-s-fl-3xs text-t-fl-xs text-neutral-700 z-10 after:-z-10 after:absolute after:inset-0 after:skew-x-[-30deg] after:bg-custom-300">
                        {ribbonText}
                    </span>
                ) : null}
                {iconBefore ? iconBefore : null}
                <span>{text}</span>
                {iconAfter ? iconAfter : null}
            </motion.div>
        </Link>
    )
}
