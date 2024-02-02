"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="w-full h-full flex flex-col gap-s-fl-xl items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800">
            <p className="text-t-fl-4xl">Un problème est survenu</p>
            <Link href="/">
                <motion.div
                    className="flex items-center rounded-full bg-custom-600 px-s-fl-m py-s-fl-2xs shadow-md hover:bg-custom-700 hover:shadow-lg active:bg-custom-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <button
                        className="flex items-center gap-s-fl-s text-t-fl-2xl"
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                        <span>Réessayer</span>
                    </button>
                </motion.div>
            </Link>
        </div>
    )
}
