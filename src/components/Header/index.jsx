"use client"

import { useEffect } from "react"
import Link from "next/link"
import AnimatedText from "@/components/Header/AnimatedText"
import AnimatedButton from "@/components/AnimatedButton"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    const contactButtonIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                <rect width={18} height={14} x={3} y={5} strokeDasharray={64} strokeDashoffset={64} rx={1}>
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.9s" values="64;0"></animate>
                </rect>
                <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5L12 12L21 6.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.6s" values="24;0"></animate>
                </path>
            </g>
        </svg>
    )

    useEffect(() => {
        let sections = {}
        let navLi = {}
        let timeouts = {}

        const highlightNavLi = (currentSectionId) => {
            navLi.forEach((li) => {
                li.classList.remove("text-neutral-800", "dark:text-neutral-100", "bg-custom-200/80", "dark:bg-neutral-600/95")
                if (li.querySelector("a") && li.querySelector("a").href.includes(currentSectionId)) {
                    li.classList.add("text-neutral-800", "dark:text-neutral-100", "bg-custom-200/80", "dark:bg-neutral-600/95")
                }
            })
        }

        const sectionObserver = new IntersectionObserver(
            (sections, observer) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        timeouts[section.target.id] = setTimeout(() => {
                            if (window.innerWidth < 1024) {
                                highlightNavLi(section.target.id)
                            }
                            // window.location.hash = section.target.id
                        }, 200)
                    } else {
                        clearTimeout(timeouts[section.target.id])
                    }
                })
            },
            { threshold: 0.6 }
        )

        const initObserver = () => {
            sections.forEach((section) => {
                sectionObserver.observe(section)
            })
        }

        setTimeout(() => {
            sections = document.querySelectorAll(".nav-anchor")
            navLi = document.querySelectorAll("nav ul li")
            initObserver()
        }, 500) //Timeout because document.querySelectorAll(".nav-anchor") returns an empty array if triggered too soon

        return () => {
            sectionObserver.disconnect()
        }
    }, [])

    return (
        <header id="home" className="nav-anchor lg:bg-custom-400 dark:lg:bg-neutral-800 snap-start h-[1px] lg:h-auto">
            {/* 1px height plutôt que hidden sur mobile sinon le snap-start n'est pas pris en compte donc on le peut plus scroller sur cette section et le #home hash link ne fonctionne plus  */}
            <div className="lg:u-container">
                <div className="flex gap-s-fl-l">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden text-t-fl-2xl lg:inline" />
                    <nav className="fixed lg:static bottom-0 lg:bottom-auto z-40 lg:z-auto w-full lg:w-auto text-t-fl-s lg:text-t-fl-base lg:font-bold text-neutral-600 dark:text-neutral-400 lg:text-neutral-50 dark:lg:text-neutral-50 border-t-[1px] lg:border-0 border-t-neutral-300/70 dark:border-t-neutral-800/90 bg-neutral-100/80 dark:bg-neutral-700/95 lg:bg-custom-400 dark:lg:bg-neutral-800 flex flex-grow justify-center">
                        <ul className="flex flex-grow items-center max-w-[600px] lg:max-w-full lg:justify-end lg:gap-s-fl-l">
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#home" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <svg
                                        className="lg:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.2em"
                                        height="1.2em"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                            <path strokeDasharray={21} strokeDashoffset={21} d="M5 21H19">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="21;0"></animate>
                                            </path>
                                            <path strokeDasharray={15} strokeDashoffset={15} d="M5 21V8M19 21V8">
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="0.4s"
                                                    dur="0.4s"
                                                    values="15;0"
                                                ></animate>
                                            </path>
                                            <path strokeDasharray={24} strokeDashoffset={24} d="M9 21V13H15V21">
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="0.8s"
                                                    dur="0.8s"
                                                    values="24;0"
                                                ></animate>
                                            </path>
                                            <path strokeDasharray={26} strokeDashoffset={26} d="M2 10L12 2L22 10">
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1s"
                                                    dur="0.8s"
                                                    values="26;0"
                                                ></animate>
                                            </path>
                                        </g>
                                    </svg>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="/#about" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <svg
                                        className="lg:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.2em"
                                        height="1.2em"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeDasharray={28}
                                            strokeDashoffset={28}
                                            strokeLinecap="round"
                                            strokeWidth={2}
                                        >
                                            <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="28;0"></animate>
                                            </path>
                                            <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1s"
                                                    dur="0.8s"
                                                    values="28;0"
                                                ></animate>
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:opacity-0 hover:after:opacity-100">
                                        Présentation
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#skills" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <svg
                                        className="lg:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.2em"
                                        height="1.2em"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                            <path strokeDasharray={64} strokeDashoffset={64} strokeWidth={2} d="M13 3L19 9V21H5V3H13">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"></animate>
                                            </path>
                                            <path strokeDasharray={14} strokeDashoffset={14} d="M12.5 3V8.5H19">
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1.4s"
                                                    dur="0.4s"
                                                    values="14;0"
                                                ></animate>
                                            </path>
                                            <g strokeDasharray={8} strokeDashoffset={8} strokeWidth={2}>
                                                <path d="M10 13L8 15L10 17">
                                                    <animate
                                                        fill="freeze"
                                                        attributeName="stroke-dashoffset"
                                                        begin="2s"
                                                        dur="0.4s"
                                                        values="8;0"
                                                    ></animate>
                                                </path>
                                                <path d="M14 13L16 15L14 17">
                                                    <animate
                                                        fill="freeze"
                                                        attributeName="stroke-dashoffset"
                                                        begin="2.4s"
                                                        dur="0.4s"
                                                        values="8;0"
                                                    ></animate>
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:opacity-0 hover:after:opacity-100">
                                        Compétences
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#projects" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs">
                                    <svg
                                        className="lg:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.2em"
                                        height="1.2em"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                            <path
                                                strokeDasharray={30}
                                                strokeDashoffset={30}
                                                d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                                            >
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="30;0"></animate>
                                            </path>
                                            <path
                                                strokeDasharray={10}
                                                strokeDashoffset={10}
                                                d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1.4s"
                                                    dur="0.4s"
                                                    values="10;0"
                                                ></animate>
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="wavyUnderline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:opacity-0 hover:after:opacity-100">
                                        Réalisations
                                    </span>
                                </Link>
                            </li>
                            <li className="flex-grow lg:flex-grow-0">
                                <Link href="#contact" className="flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs lg:hidden">
                                    <svg
                                        className="lg:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.2em"
                                        height="1.2em"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                                            <rect width={18} height={14} x={3} y={5} strokeDasharray={64} strokeDashoffset={64} rx={1}>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"></animate>
                                            </rect>
                                            <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5L12 12L21 6.5">
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1.2s"
                                                    dur="0.8s"
                                                    values="24;0"
                                                ></animate>
                                            </path>
                                        </g>
                                    </svg>
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <AnimatedButton
                        link="mailto:hello@thibautroegiers.dev"
                        linkClass="hidden lg:flex"
                        text="Contactez-moi"
                        iconBefore={contactButtonIcon}
                    />
                </div>
            </div>
        </header>
    )
}
