"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import SkillsSlideshow from "./SkillsSlideshow"

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
            className="nav-anchor bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800 snap-start flex flex-col min-h-screen"
        >
            <div className="u-container flex flex-col flex-grow items-center gap-s-fl-l-xl">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`font-paytoneOne text-t-fl-xl motion-safe:animate-fade-down motion-safe:animate-delay-300 ${
                                inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                            }`}
                        >
                            Mes compétences
                        </h2>
                    )}
                </InView>
                <div className="flex flex-grow self-stretch">
                    <SkillsSlideshow skills={skills} />
                </div>
            </div>
        </section>
    )
}
