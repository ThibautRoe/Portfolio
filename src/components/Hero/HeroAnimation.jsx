"use client"

import { useEffect, useState } from "react"
import { InView } from "react-intersection-observer"
import "@dotlottie/player-component"
import useDarkMode from "@/hooks/useDarkMode"
import useReduceMotion from "@/hooks/useReduceMotion"
import PlayButton from "@/components/PlayButton"

export default function HeroAnimation() {
    const heroAnimationPath = "/hero-animation.lottie"
    const [player, setPlayer] = useState()
    const [playerIsPlaying, setPlayerIsPlaying] = useState(false)
    const reduceMotion = useReduceMotion()
    useDarkMode()

    useEffect(() => {
        const playerElement = document.querySelector("dotlottie-player")

        function initPlayer() {
            if (playerElement) {
                setPlayer(playerElement)
                playerElement.addEventListener("ready", handlePlayerReady)
            }
        }

        function handlePlayerReady() {
            if (!reduceMotion) {
                playerElement.play()
                setPlayerIsPlaying(true)
            }

            removeSplashScreen()
        }

        function removeSplashScreen() {
            const loader = document.getElementById("splashScreen")
            if (loader) {
                document.body.classList.remove("overflow-hidden")
                document.body.classList.add("overflow-y-auto", "overflow-x-hidden")
                loader.remove()
            }
        }

        initPlayer()

        return () => {
            if (playerElement) {
                playerElement.removeEventListener("ready", handlePlayerReady)
            }
        }
    }, [reduceMotion])

    function toggleAnimation() {
        player.togglePlay()
        setPlayerIsPlaying(!playerIsPlaying)
    }

    return (
        <InView triggerOnce>
            {({ inView, ref, entry }) => (
                <div
                    ref={ref}
                    className={`flex items-center justify-center motion-safe:animate-fade-down motion-safe:animate-delay-300 ${
                        inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                    }`}
                >
                    <div className="relative flex items-center justify-center">
                        <dotlottie-player
                            class="w-[70dvw] sm:w-[65dvw] lg:w-full"
                            src={heroAnimationPath}
                            loop=""
                            onClick={toggleAnimation}
                        ></dotlottie-player>
                        <PlayButton
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-600 ${
                                playerIsPlaying ? "hidden" : ""
                            }`}
                            actionOnClick={toggleAnimation}
                            width="2.5em"
                            height="2.5em"
                        />
                    </div>
                </div>
            )}
        </InView>
    )
}
