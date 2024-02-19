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
        <section id="about" className="nav-anchor color-transition bg-neutral-100 dark:bg-neutral-800 snap-start flex min-h-screen">
            <div className="u-container flex flex-col flex-grow justify-center gap-s-fl-l-xl w-full">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`text-center font-paytoneOne text-t-fl-xl color-transition text-custom-600 dark:text-neutral-50 motion-safe:animate-fade-down motion-safe:animate-delay-300 ${
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
                                <span className="color-transition text-custom-600 dark:text-neutral-50">Moi c'est Thibaut, </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">ingénieur</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50"> de formation, je suis </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">développeur web</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">
                                    {" "}
                                    fullstack spécialisé dans le{" "}
                                </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">front-end</span>.
                                <br />
                                <br />
                                <span className="color-transition text-custom-600 dark:text-neutral-50">Passionné d'</span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">escalade</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">, de </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">musique</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">, de </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">voyages</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">, de </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">vans aménagés</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50"> et de </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">bricolage</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">, j'ai aussi une </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">
                                    grande passion pour l'informatique et les nouvelles technologies
                                </span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">.</span>
                                <br />
                                <br />
                                <span className="color-transition text-custom-600 dark:text-neutral-50">
                                    Depuis l'assemblage de mon 1er PC à 15 ans, cette{" "}
                                </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">passion</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50"> n'a fait que croître.</span>
                                <br />
                                <br />
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">Autodidacte</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">
                                    , j'ai bâti des bases solides en HTML/CSS/JS, que j'ai récemment perfectionnées grâce à une{" "}
                                </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">
                                    formation certifiante
                                </span>
                                .
                                <br />
                                <br />
                                <span className="color-transition text-custom-600 dark:text-neutral-50">Je maîtrise les </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">
                                    dernières technologies et frameworks
                                </span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50"> tels que React / Next.js.</span>
                                <br />
                                <br />
                                <span className="color-transition text-custom-600 dark:text-neutral-50">
                                    J'offre aujourd'hui toute mon{" "}
                                </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">expertise</span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">
                                    {" "}
                                    à mes clients, en garantissant{" "}
                                </span>
                                <span className="color-transition font-bold text-custom-600 dark:text-neutral-50">
                                    écoute, rigueur, professionnalisme et flexibilité
                                </span>
                                <span className="color-transition text-custom-600 dark:text-neutral-50">.</span>
                                <br />
                                <br />
                                <span className="color-transition font-bold text-custom-400 dark:text-custom-300">
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
