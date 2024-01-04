"use client"

import { useRef, useEffect } from "react"
import dynamic from "next/dynamic"

const DynamicSlideshow = dynamic(() => import("./SkillsSlideshow"), { ssr: false })

export default function Skills({ skills }) {
    const skillsSectionRef = useRef(null)

    function handleResizeSkills() {
        const nav = document.querySelector("nav")
        const skillsSection = skillsSectionRef.current

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
        <section ref={skillsSectionRef} id="skills" className="bg-gradient-to-b from-custom-400 to-custom-300 h-dvh">
            <div className="u-container flex flex-col items-center gap-s-fl-2xl font-paytoneOne h-full">
                <h2 className="text-t-fl-xl tiny:hidden">Mes compétences</h2>
                <div className="flex flex-grow self-stretch">
                    <DynamicSlideshow skills={skills} />
                </div>
            </div>
        </section>
    )
}
