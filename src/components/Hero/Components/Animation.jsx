"use client"

import "@dotlottie/player-component"

export default function Animation() {
    const heroAnimationPath = "/hero-animation.json"

    return (
        <div className="flex items-center justify-center">
            <dotlottie-player
                style={{ height: "auto", width: "80%" }}
                src={heroAnimationPath}
                background="transparent"
                speed="1"
                direction="1"
                mode="normal"
                loop
                autoplay
            ></dotlottie-player>
        </div>
    )
}
