"use client"

import { useEffect } from "react"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconChevronRight from "@/components/Icons/src/AnimatedOnRender/IconChevronRight"
import useDarkMode from "@/hooks/useDarkMode"

export default function NotFound() {
    const darkMode = useDarkMode()

    useEffect(() => {
        function removeSplashScreen() {
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
        <div className="w-full h-full flex flex-col gap-s-fl-xl items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800 ">
            <p className="text-t-fl-4xl">Perdu ?</p>
            <AnimatedButton
                link="/"
                text="Accueil"
                bigText
                iconBefore={
                    <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                        <IconChevronRight />
                    </BaseIcon>
                }
                systemButton
            />
        </div>
    )
}
