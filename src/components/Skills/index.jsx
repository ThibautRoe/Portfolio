"use client"

import { useEffect } from "react"
import SkillsSlideshow from "./SkillsSlideshow"

export default function Skills({ skills }) {
    function handleResizeSkills() {
        const nav = document.querySelector("nav")
        const skillsSection = document.getElementById("skills")

        if (nav && skillsSection) {
            skillsSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
        }
    }

    useEffect(() => {
        handleResizeSkills()

        window.addEventListener("resize", handleResizeSkills)

        return () => {
            window.removeEventListener("resize", handleResizeSkills)
        }
    }, [])

    return (
        <section id="skills" className="navAnchor bg-gradient-to-b from-custom-400 to-custom-300 snap-start flex flex-col min-h-screen">
            <div className="u-container flex flex-col flex-grow items-center gap-s-fl-l-xl">
                <h2 className="font-paytoneOne text-t-fl-xl tiny:hidden">Mes compétences</h2>
                <div className="flex flex-grow self-stretch">
                    <SkillsSlideshow skills={skills} />
                </div>
            </div>
        </section>
    )
}
