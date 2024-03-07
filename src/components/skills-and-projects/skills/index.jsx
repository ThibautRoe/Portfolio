"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import SkillsSlideshow from "./skills-slideshow"

export default function Skills({ skills }) {
    useEffect(() => {
        function handleResizeSkills() {
            const nav = document.querySelector("nav")
            const skillsSection = document.getElementById("skills")

            if (nav && skillsSection) {
                skillsSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
            }
        }

        handleResizeSkills()

        window.addEventListener("resize", handleResizeSkills)

        return () => {
            window.removeEventListener("resize", handleResizeSkills)
        }
    }, [])

    return (
        <section
            id="skills"
            className="nav-anchor color-transition bg-gradient-to-b from-white/0 to-white/15 bg-custom-400 dark:bg-neutral-900 snap-start flex min-h-screen"
        >
            <div className="u-container flex flex-col gap-s-fl-l-xl w-full">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`text-center font-paytoneOne text-t-fl-xl motion-reduce:animate-none animate-fade-down animate-delay-300 ${
                                inView ? "animate-play" : "animate-stop"
                            }`}
                        >
                            Mes compétences
                        </h2>
                    )}
                </InView>
                <div className="flex flex-grow">
                    <SkillsSlideshow skills={skills} />
                </div>
            </div>
        </section>
    )
}
