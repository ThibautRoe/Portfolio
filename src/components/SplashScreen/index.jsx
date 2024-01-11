"use client"

import { useEffect } from "react"
import "./SplashScreen.css"

export default function SplashScreen() {
    useEffect(() => {
        document.body.style.overflow = "hidden"
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
        <div id="splashScreen" className="fixed z-50 h-dvh w-dvw flex items-center justify-center bg-custom-400">
            <textarea id="focusTrap" className="hidden"></textarea>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}
