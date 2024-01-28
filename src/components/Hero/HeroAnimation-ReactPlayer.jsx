"use client"

import { useEffect, useState } from "react"
import { DotLottiePlayer } from "@dotlottie/react-player"
import "@dotlottie/react-player/dist/index.css"

export default function HeroAnimation() {
    const heroAnimationPath = "/hero-animation.lottie"
    const [player, setPlayer] = useState()

    useEffect(() => {
        const initPlayer = async () => {
            const playerElement = document.querySelector("dotlottie-player")

            if (playerElement) {
                setPlayer(playerElement)
            }
        }

        initPlayer()
    }, [])

    // TODO Modifier pour le player React
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
                <DotLottiePlayer
                    className="w-[80%] sm:w-[65%] lg:w-full"
                    src={heroAnimationPath}
                    autoplay
                    loop
                    onClick={toggleAnimation}
                ></DotLottiePlayer>
            </div>
        </div>
    )
}
