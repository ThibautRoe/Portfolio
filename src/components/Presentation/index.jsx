"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"

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
        <section
            id="about"
            className="nav-anchor color-transition bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-50 snap-start flex min-h-screen"
        >
            <div className="u-container flex flex-col flex-grow justify-center gap-s-fl-l-xl w-full">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`text-center font-paytoneOne text-t-fl-xl motion-safe:animate-fade-down motion-safe:animate-delay-300 ${
                                inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                            }`}
                        >
                            Présentation
                        </h2>
                    )}
                </InView>
                <div className="flex flex-grow items-center">
                    <InView triggerOnce>
                        {({ inView, ref, entry }) => (
                            <div
                                ref={ref}
                                className={`motion-safe:animate-fade-up motion-safe:animate-delay-300 ${
                                    inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                                }`}
                            >
                                {/* text color on each element to avoid problem with color transition when switching dark mode */}
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
                                <span className="font-bold">musique</span>
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
                                <span className="font-bold">formation certifiante</span>
                                .
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
                                <span className="font-bold color-transition text-custom-600 dark:text-custom-300">
                                    Confiez-moi votre projet, et ensemble, assurons sa réussite{" "}
                                </span>
                                <div className="inline-block animate-bounce">🤝</div>
                            </div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    )
}
