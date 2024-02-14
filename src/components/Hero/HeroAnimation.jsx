"use client"

import { useEffect, useState } from "react"
import "@dotlottie/player-component"
import useDarkMode from "@/hooks/useDarkMode"

export default function HeroAnimation() {
    const heroAnimationPath = "/hero-animation.lottie"
    const [player, setPlayer] = useState()
    useDarkMode()

    useEffect(() => {
        const playerElement = document.querySelector("dotlottie-player")

        const removeSplashScreen = () => {
            const loader = document.getElementById("splashScreen")
            if (loader) {
                document.body.classList.remove("overflow-hidden")
                document.body.classList.add("overflow-y-auto", "overflow-x-hidden")
                loader.remove()
            }
        }

        const initPlayer = async () => {
            if (playerElement) {
                setPlayer(playerElement)
                playerElement.addEventListener("ready", handlePlayerReady())
            }
        }

        function handlePlayerReady() {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

            if (reduceMotion) {
                setTimeout(() => playerElement.pause(), 100)
            }

            setTimeout(() => removeSplashScreen(), 100)
        }

        initPlayer()

        return () => {
            const playerElement = document.querySelector("dotlottie-player")

            if (playerElement) {
                playerElement.removeEventListener("ready", handlePlayerReady())
            }
        }
    }, [])

    function toggleAnimation() {
        if (player) {
            const playerState = player.getState()

            if (playerState.currentState === "playing") {
                player.pause()
            } else {
                player.play()
            }
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
                <dotlottie-player
                    class="w-[70dvw] sm:w-[65dvw] lg:w-full"
                    src={heroAnimationPath}
                    loop=""
                    autoplay=""
                    onClick={toggleAnimation}
                ></dotlottie-player>
            </div>
        </div>
    )
}
