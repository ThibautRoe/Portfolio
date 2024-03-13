"use client"

import { useEffect } from "react"
import Loader from "@/components/ui/Loader"

export default function SplashScreen() {
    useEffect(() => {
        function handleFocusTrap(e) {
            const focusTrap = document.getElementById("focusTrap")

            if (focusTrap && e.key === "Tab") {
                e.preventDefault()
                focusTrap.focus()
            }
        }

        document.addEventListener("keydown", handleFocusTrap)

        return () => {
            document.removeEventListener("keydown", handleFocusTrap)
        }
    }, [])

    return (
        <div
            id="splashScreen"
            className="fixed z-50 overflow-hidden w-full h-full flex items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800"
        >
            <textarea id="focusTrap" className="hidden"></textarea>
            <Loader />
        </div>
    )
}
