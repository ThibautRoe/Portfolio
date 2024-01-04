"use client"

import { useEffect, useState } from "react"
import "@dotlottie/player-component"

export default function Animation() {
    const heroAnimationPath = "/hero-animation.lottie"
    const [player, setPlayer] = useState()

    useEffect(() => {
        const initPlayer = () => {
            const playerElement = document.querySelector("dotlottie-player")

            if (playerElement) {
                setPlayer(playerElement)
            }
        }

        initPlayer()
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
        <div className="flex items-center justify-center p-s-fl-m">
            <dotlottie-player
                class="w-[80%] sm:w-[65%] lg:w-full"
                src={heroAnimationPath}
                loop
                autoplay
                onClick={toggleAnimation}
            ></dotlottie-player>
        </div>
    )
}
