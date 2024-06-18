"use client"

import { useState } from "react"
import { InView } from "react-intersection-observer"
import SkillCard from "./skill-card"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/a11y"
import "swiper/css/keyboard"
import "swiper/css/mousewheel"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function SkillsSlideshow({ skills }) {
    const [spaceXsValue, setSpaceXsValue] = useState(0)

    function handleUpdateSpaceBetweenSlides() {
        const skillCard = document.querySelector(".skill-card")

        if (skillCard) {
            setSpaceXsValue(getComputedStyle(skillCard).getPropertyValue("border-radius"))
            // Je me base sur ça car le border-radius des skill cards utilise déjà --space-xs et c'est ce que je veux pour "space-between" de swiper
            // Comme swipper n'accèpte pas de variables ou autre et qu'il n'accèpte que string ou number pour "space-between",
            // je suis obligé de récupérer la valeur de --space-xs à l'instant T et de lui passer comme nombre
        }
    }

    function initSpaceBetweenAndEventListener() {
        handleUpdateSpaceBetweenSlides()
        window.addEventListener("resize", handleUpdateSpaceBetweenSlides)
    }

    return (
        <Swiper
            className="skills-swiper w-full h-full"
            modules={[A11y, Keyboard, Mousewheel, Navigation, Pagination]}
            a11y={{
                firstSlideMessage: "Première slide",
                lastSlideMessage: "Dernière slide",
                nextSlideMessage: "Slide suivante",
                paginationBulletMessage: "Aller à la slide {{index}}",
                prevSlideMessage: "Slide précédente",
            }}
            breakpoints={{ 660: { slidesPerView: 2 }, 1230: { slidesPerView: 3 } }}
            grabCursor
            keyboard
            longSwipesRatio={0.25}
            mousewheel={{ forceToAxis: true }}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={spaceXsValue}
            onSwiper={(swiper) => initSpaceBetweenAndEventListener()}
        >
            {skills.map((skill) => (
                <SwiperSlide
                    key={skill.name}
                    /* lazy="true" */
                    className="skill-slide pb-s-fl-s"
                >
                    <div className="flex flex-col items-center w-full h-full">
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
                        <div className="flex grow items-center">
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
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
