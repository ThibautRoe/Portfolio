"use client"

import { useEffect } from "react"

/* eslint-disable react/no-unescaped-entities */
export default function Presentation() {
    useEffect(() => {
        function handleResizeAbout() {
            const nav = document.querySelector("nav")
            const aboutSection = document.getElementById("about")

            if (nav && aboutSection) {
                aboutSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
            }
        }

        handleResizeAbout()

        window.addEventListener("resize", handleResizeAbout)

        return () => {
            window.removeEventListener("resize", handleResizeAbout)
        }
    }, [])

    return (
        <section id="about" className="nav-anchor bg-neutral-100 dark:bg-neutral-800 snap-start flex flex-col min-h-screen">
            <div className="u-container flex flex-col flex-grow justify-center gap-s-fl-2xl text-custom-600 dark:text-neutral-50 w-full">
                <h2 className="text-center font-paytoneOne text-t-fl-xl">Présentation</h2>
                <div className="flex flex-grow items-center">
                    <div>
                        <span>Moi c'est Thibaut, </span>
                        <span className="font-bold">ingénieur</span>
                        <span> de formation, je suis </span>
                        <span className="font-bold">développeur web</span>
                        <span> fullstack spécialisé dans le </span>
                        <span className="font-bold">front-end</span>.
                        <br />
                        <br />
                        <span>Passionné d'</span>
                        <span className="font-bold">escalade</span>
                        <span>, de </span>
                        <span className="font-bold">voyages</span>
                        <span>, de </span>
                        <span className="font-bold">vans aménagés</span>
                        <span> et de </span>
                        <span className="font-bold">bricolage</span>
                        <span>, j'ai aussi une </span>
                        <span className="font-bold">grande passion pour l'informatique et les nouvelles technologies</span>
                        <span>.</span>
                        <br />
                        <br />
                        <span>Depuis l'assemblage de mon 1er PC à 15 ans, cette </span>
                        <span className="font-bold">passion</span>
                        <span> n'a fait que croître.</span>
                        <br />
                        <br />
                        <span className="font-bold">Autodidacte</span>
                        <span>, j'ai bâti des bases solides en HTML/CSS/JS, que j'ai récemment perfectionnées grâce à une </span>
                        <span className="font-bold">formation certifiante</span>.
                        <br />
                        <br />
                        <span>Je maîtrise les </span>
                        <span className="font-bold">dernières technologies et frameworks</span>
                        <span> tels que React / Next.js.</span>
                        <br />
                        <br />
                        <span>J'offre aujourd'hui toute mon </span>
                        <span className="font-bold">expertise</span>
                        <span> à mes clients, en garantissant </span>
                        <span className="font-bold">écoute, rigueur, professionnalisme et flexibilité</span>
                        <span>.</span>
                        <br />
                        <br />
                        <span className="font-bold text-custom-400 dark:text-custom-300">
                            Confiez-moi votre projet, et ensemble, assurons sa réussite{" "}
                        </span>
                        <div className="inline-block animate-bounce">🤝</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
