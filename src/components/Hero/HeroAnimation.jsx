"use client"

import { useEffect, useState } from "react"

export default function HeroAnimation() {
    const heroAnimationPath = "/hero-animation.lottie"
    const [player, setPlayer] = useState()

    useEffect(() => {
        import("@dotlottie/player-component")

        const initPlayer = async () => {
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
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
                <dotlottie-player
                    class="w-[80%] sm:w-[65%] lg:w-full"
                    src={heroAnimationPath}
                    autoplay
                    loop
                    onClick={toggleAnimation}
                ></dotlottie-player>
            </div>
        </div>
    )
}
