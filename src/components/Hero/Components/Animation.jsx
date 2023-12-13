"use client"

import "@dotlottie/player-component"

export default function Animation() {
    const heroAnimationPath = "/hero-animation.json"

    return (
        <div>
            <dotlottie-player
                style={{ height: "auto", width: "200%" }}
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
