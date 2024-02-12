"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconChevronRight from "@/components/Icons/src/IconChevronRight"

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    useEffect(() => {
        const removeSplashScreen = () => {
            const loader = document.getElementById("splashScreen")
            if (loader) {
                document.body.classList.remove("overflow-hidden")
                document.body.classList.add("overflow-y-auto", "overflow-x-hidden")
                loader.remove()
            }
        }

        removeSplashScreen()
    }, [])

    return (
        <div className="w-full h-full flex flex-col gap-s-fl-xl items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800">
            <p className="text-t-fl-4xl">Un problème est survenu</p>
            <motion.div
                tabIndex="-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="flex items-center gap-s-fl-s font-bold rounded-full bg-custom-600 hover:bg-custom-700 active:bg-custom-800 shadow-md hover:shadow-lg text-t-fl-xl px-s-fl-l py-s-fl-xs"
                >
                    {
                        <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                            <IconChevronRight />
                        </BaseIcon>
                    }
                    <span>Réessayer</span>
                </button>
            </motion.div>
        </div>
    )
}
