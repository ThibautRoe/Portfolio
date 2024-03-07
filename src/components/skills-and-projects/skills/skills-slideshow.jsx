"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import SkillCard from "./skill-card"
import { register } from "swiper/element/bundle"
register()

export default function SkillsSlideshow({ skills }) {
    useEffect(() => {
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
            breakpoints='{"660": {"slidesPerView": 2}, "1230": {"slidesPerView": 3}}'
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            slides-per-view="1"
        >
            {skills.map((skill, index) => (
                <div
                    // See projects slideshow for why <div slot="slide-x"> instead of <swiper-slide>, even if it's not necessary for the skills slideshow because I don't use the "card" effet, it resolved a warning I had in the console...
                    key={skill.name}
                    slot={`slide-${index}`}
                    /* lazy="true" */
                    className="skill-slide flex flex-col items-center h-full mb-s-fl-l"
                >
                    <InView triggerOnce>
                        {({ inView, ref, entry }) => (
                            <h3
                                ref={ref}
                                className={`font-paytoneOne text-t-fl-l motion-reduce:animate-none animate-fade-up animate-delay-300 ${
                                    inView ? "animate-play" : "animate-stop"
                                }`}
                            >
                                {skill.name}
                            </h3>
                        )}
                    </InView>
                    <div className="flex flex-grow items-center">
                        <InView triggerOnce>
                            {({ inView, ref, entry }) => (
                                <div
                                    ref={ref}
                                    className={`flex flex-wrap justify-center gap-s-fl-l-xl px-s-fl-s py-s-fl-l motion-reduce:animate-none animate-fade animate-delay-300 animate-duration-[2500ms] ${
                                        inView ? "animate-play" : "animate-stop"
                                    }`}
                                >
                                    {skill.value.map((item) => (
                                        <SkillCard key={item.id} item={item} />
                                    ))}
                                </div>
                            )}
                        </InView>
                    </div>
                </div>
            ))}
        </swiper-container>
    )
}
