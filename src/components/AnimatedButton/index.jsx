"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export default function AnimatedButton(props) {
    const { link, linkClass, text, bigText, iconBefore, iconAfter, ribbonText, systemButton } = props

    return (
        <Link
            tabIndex="-1"
            href={link}
            target={systemButton ? "" : "_blank"}
            rel="noopener noreferrer"
            className={linkClass ? linkClass : ""}
        >
            <motion.div
                tabIndex="-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <button
                    className={`flex items-center gap-s-fl-s font-bold rounded-full bg-custom-600 hover:bg-custom-700 active:bg-custom-800 shadow-md hover:shadow-lg ${
                        bigText ? "text-t-fl-xl px-s-fl-l py-s-fl-xs" : "text-t-fl-l px-s-fl-m py-s-fl-2xs"
                    } ${ribbonText ? "relative" : ""}`}
                >
                    {ribbonText ? (
                        <span className="absolute -left-s-fl-xs -top-s-fl-xs px-s-fl-xs py-s-fl-3xs text-t-fl-xs text-neutral-700 z-10 after:-z-10 after:absolute after:inset-0 after:skew-x-[-30deg] after:bg-custom-300">
                            {ribbonText}
                        </span>
                    ) : null}
                    {iconBefore ? <FontAwesomeIcon icon={iconBefore} /> : null}
                    <span>{text}</span>
                    {iconAfter ? <FontAwesomeIcon icon={iconAfter} /> : null}
                </button>
            </motion.div>
        </Link>
    )
}
