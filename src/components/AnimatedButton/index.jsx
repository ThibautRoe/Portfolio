"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function AnimatedButton({ link, text }) {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="hidden lg:flex">
            <motion.div
                className="flex items-center rounded-full bg-custom-600 px-s-fl-m shadow-md hover:bg-custom-700 hover:shadow-lg active:bg-custom-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <button className="flex items-center gap-s-fl-s text-t-fl-l">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <span>{text}</span>
                </button>
            </motion.div>
        </Link>
    )
}
