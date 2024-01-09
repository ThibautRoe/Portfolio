"use client"

import { useEffect } from "react"
import SkillCard from "./SkillCard"
import "./SkillsSlideshow.css"
import { register } from "swiper/element/bundle"
register()

export default function SkillsSlideshow({ skills }) {
    function handleUpdateSpaceBetweenSlides() {
        const swiperEl = document.querySelector(".skills-swiper")
        const skillCard = document.querySelector(".skill-card")

        if (swiperEl && skillCard) {
            const spaceXsValue = getComputedStyle(skillCard).getPropertyValue("border-radius")
            // Je me base sur ça car le border-radius des skill cards utilise déjà --space-xs et c'est ce que je veux pour "space-between" de swiper
            // Comme swipper n'accèpte pas de variables ou autre et qu'il n'accèpte que string ou number pour "space-between",
            // je suis obligé de récupérer la valeur de --space-xs à l'instant T et de lui passer comme nombre
            swiperEl.setAttribute("space-between", spaceXsValue)
        }
    }

    useEffect(() => {
        handleUpdateSpaceBetweenSlides()

        window.addEventListener("resize", handleUpdateSpaceBetweenSlides)

        return () => {
            window.removeEventListener("resize", handleUpdateSpaceBetweenSlides)
        }
    }, [])

    return (
        <swiper-container
            class="skills-swiper w-full"
            a11y="true"
            breakpoints='{"768": {"slidesPerView": 2}, "1024": {"slidesPerView": 3, "grabCursor": true}}'
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            slides-per-view="1"
        >
            <swiper-slide class="flex flex-col items-center px-s-fl-l">
                <p className="font-paytoneOne text-t-fl-l">Front-end</p>
                <div className="flex flex-grow items-center">
                    <div className="flex flex-wrap justify-center gap-s-fl-xl">
                        <SkillCard items={skills.frontend} />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex flex-col items-center px-s-fl-l">
                <p className="font-paytoneOne text-t-fl-l">Back-end</p>
                <div className="flex flex-grow items-center">
                    <div className="flex flex-wrap justify-center gap-s-fl-xl">
                        <SkillCard items={skills.backend} />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex flex-col items-center px-s-fl-l">
                <p className="font-paytoneOne text-t-fl-l">Autres</p>
                <div className="flex flex-grow items-center">
                    <div className="flex flex-wrap justify-center gap-s-fl-xl">
                        <SkillCard items={skills.other} />
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    )
}
