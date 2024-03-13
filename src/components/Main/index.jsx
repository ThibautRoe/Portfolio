"use client"

import { useInView } from "react-intersection-observer"
import Hero from "@/components/Hero"
import StickyBurgerMenu from "@/components/Main/StickyBurgerMenu"
import Presentation from "@/components/Presentation"
// import ContactForm from "@/components/ContactForm"
import Contact from "@/components/Contact"

export default function Main({ skillsAndProjectsComponent }) {
    const { ref, inView, entry } = useInView({
        threshold: 0.001,
    })

    return (
        <main>
            <section
                ref={ref}
                id="hero"
                className="color-transition bg-gradient-to-b from-white/0 to-white/15 bg-custom-400 dark:bg-neutral-800 flex min-h-screen"
            >
                <Hero />
            </section>
            {!inView ? <StickyBurgerMenu /> : null}
            <Presentation />
            {skillsAndProjectsComponent}
            <Contact />
        </main>
    )
}
