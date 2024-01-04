"use client"

import { useRef, useEffect } from "react"

/* eslint-disable react/no-unescaped-entities */
export default function Presentation() {
    const aboutSectionRef = useRef(null)

    function handleResizeAbout() {
        const nav = document.querySelector("nav")
        const aboutSection = aboutSectionRef.current

        if (nav && aboutSection) {
            aboutSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
        }
    }

    useEffect(() => {
        handleResizeAbout()

        window.addEventListener("resize", handleResizeAbout)

        return () => {
            window.removeEventListener("resize", handleResizeAbout)
        }
    }, [])

    return (
        <section ref={aboutSectionRef} id="about" className="bg-neutral-100 h-dvh">
            <div className="u-container flex flex-col justify-center gap-s-fl-2xl text-custom-600 h-full">
                <h2 className="text-center font-paytoneOne text-t-fl-xl">Présentation</h2>
                <p>
                    Moi c'est Thibaut, <span className="font-bold">développeur web</span> fullstack spécialisé dans le{" "}
                    <span className="font-bold">front-end</span>.
                    <br />
                    <br />
                    Depuis l'assemblage de mon 1er PC à 15 ans, ma <span className="font-bold">passion</span> pour l'informatique n'a fait
                    que croître.
                    <br />
                    <br />
                    <span className="font-bold">Autodidacte</span>, j'ai bâti des bases solides en HTML/CSS/JS, que j'ai récemment
                    perfectionnées grâce à une <span className="font-bold">formation certifiante</span>.
                    <br />
                    <br />
                    Je maîtrise les <span className="font-bold">dernières technologies et frameworks</span> tels que React / Next.js.
                    <br />
                    <br />
                    J'offre aujourd'hui toute mon <span className="font-bold">expertise</span> à mes clients, en garantissant{" "}
                    <span className="font-bold">écoute, rigueur, professionnalisme et flexibilité</span>.
                    <br />
                    <br />
                    <span className="font-bold text-custom-400">Confiez-moi votre projet, et ensemble, assurons sa réussite 🤝</span>
                </p>
            </div>
        </section>
    )
}
