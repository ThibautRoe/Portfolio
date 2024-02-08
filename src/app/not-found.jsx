"use client"

import { useEffect } from "react"
import AnimatedButton from "@/components/AnimatedButton"

export default function NotFound() {
    const notFoundButtonIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <g transform="translate(24 0) scale(-1 1)">
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray={10}
                    strokeDashoffset={10}
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M8 12L15 5M8 12L15 19"
                >
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="10;0"></animate>
                </path>
            </g>
        </svg>
    )

    useEffect(() => {
        const removeSplashScreen = () => {
            const loader = document.getElementById("splashScreen")
            if (loader) {
                document.body.style.overflow = "auto"
                loader.remove()
            }
        }

        removeSplashScreen()
    }, [])

    return (
        <div className="w-full h-full flex flex-col gap-s-fl-xl items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800 ">
            <p className="text-t-fl-4xl">Perdu ?</p>
            <AnimatedButton link="/" text="Accueil" bigText iconBefore={notFoundButtonIcon} systemButton />
        </div>
    )
}
