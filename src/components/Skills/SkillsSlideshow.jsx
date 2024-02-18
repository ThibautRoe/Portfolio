"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import SkillCard from "./SkillCard"
import Loader from "@/components/Loader"
import "./SkillsSlideshow.css"
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

        window.addEventListener("resize", handleUpdateSpaceBetweenSlides)

        return () => {
            window.removeEventListener("resize", handleUpdateSpaceBetweenSlides)
        }
    }, [])

    return (
        <swiper-container
            class="skills-swiper w-full"
            a11y="true"
            breakpoints='{"768": {"slidesPerView": 2}, "1024": {"slidesPerView": 3}}'
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            slides-per-view="1"
        >
            {skills.map((skill) => (
                <swiper-slide key={skill.name} lazy="true" class="skills-slide flex flex-col items-center px-s-fl-l">
                    <InView triggerOnce>
                        {({ inView, ref, entry }) => (
                            <h3
                                ref={ref}
                                className={`font-paytoneOne text-t-fl-l motion-safe:animate-fade-up motion-safe:animate-delay-300 ${
                                    inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                                }`}
                            >
                                {skill.name}
                            </h3>
                        )}
                    </InView>
                    <div className="flex flex-grow items-center pt-s-fl-s pb-s-fl-l">
                        <InView triggerOnce>
                            {({ inView, ref, entry }) => (
                                <div
                                    ref={ref}
                                    className={`flex flex-wrap justify-center gap-s-fl-xl motion-safe:animate-fade motion-safe:animate-delay-300 motion-safe:animate-duration-[2500ms] ${
                                        inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                                    }`}
                                >
                                    {skill.value.map((item) => (
                                        <SkillCard key={item.id} item={item} />
                                    ))}
                                </div>
                            )}
                        </InView>
                    </div>
                    <div className="swiper-lazy-preloader">
                        <Loader />
                    </div>
                </swiper-slide>
            ))}
        </swiper-container>
    )
}
