"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import BaseIcon from "@/components/ui/icons/base-icon"
import IconHome from "@/components/ui/icons/src/animated-on-render/icon-home"
import IconPerson from "@/components/ui/icons/src/animated-on-render/icon-person"
import IconCode from "@/components/ui/icons/src/animated-on-render/icon-code"
import IconGithubNavBar from "@/components/ui/icons/src/animated-on-render/icon-github-navbar"
import IconMail from "@/components/ui/icons/src/animated-on-render/icon-mail"
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"

export default function Navigation({ header, delay }) {
    const [activeSectionId, setActiveSectionId] = useState("home")

    const navItems = [
        { id: "home", text: "Accueil", icon: <IconHome delay={delay} />, mobileOnly: true },
        { id: "about", text: "Présentation", icon: <IconPerson delay={delay} />, mobileOnly: false },
        { id: "skills", text: "Compétences", icon: <IconCode delay={delay} />, mobileOnly: false },
        { id: "projects", text: "Réalisations", icon: <IconGithubNavBar delay={delay} />, mobileOnly: false },
        { id: "contact", text: "Contact", icon: <IconMail delay={delay} />, mobileOnly: true },
    ]

    useEffect(() => {
        let sections = []
        let timeouts = []
        const delayInit = header ? 500 : 0
        const delayUpdate = header ? 250 : 0

        const sectionObserver = new IntersectionObserver(
            (sections, observer) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        timeouts[section.target.id] = setTimeout(() => {
                            setActiveSectionId(section.target.id)
                            // window.location.hash = section.target.id
                        }, delayUpdate)
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
            initObserver()
        }, delayInit) //Timeout because document.querySelectorAll() returns an empty array if triggered too soon for header

        return () => {
            sectionObserver.disconnect()
            timeouts.forEach((timeout) => clearTimeout(timeout))
        }
    }, [])

    if (header) {
        return (
            <nav className="fixed color-transition lg:static bottom-0 lg:bottom-auto z-40 lg:z-auto w-full lg:w-auto text-t-fl-xs lg:text-t-fl-base lg:font-bold border-t-[1px] lg:border-0 border-t-neutral-300/70 dark:border-t-neutral-800/90 bg-neutral-100/80 dark:bg-neutral-700/95 lg:bg-custom-400 dark:lg:bg-neutral-800 flex flex-grow justify-center">
                <ul className="flex flex-grow items-center max-w-[600px] lg:max-w-full lg:justify-end lg:gap-s-fl-m-l">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={`flex-grow lg:flex-grow-0 ${
                                activeSectionId === item.id
                                    ? "color-transition bg-custom-200/80 lg:bg-custom-400 dark:bg-neutral-600/95 dark:lg:bg-neutral-800"
                                    : ""
                            }`}
                        >
                            <Link
                                href={`#${item.id}`}
                                className={`flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs ${item.mobileOnly ? "lg:hidden" : ""}`}
                            >
                                <BaseIcon
                                    className={`lg:hidden color-transition ${
                                        activeSectionId === item.id
                                            ? "text-neutral-800 dark:text-neutral-100"
                                            : "text-neutral-600 dark:text-neutral-400"
                                    } lg:text-neutral-600 dark:lg:text-neutral-50`}
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 24 24"
                                >
                                    {item.icon}
                                </BaseIcon>
                                <span
                                    className={`color-transition lg:text-neutral-600 dark:lg:text-neutral-50 ${
                                        activeSectionId === item.id
                                            ? "text-neutral-800 dark:text-neutral-100"
                                            : "text-neutral-600 dark:text-neutral-400"
                                    } ${
                                        item.mobileOnly
                                            ? ""
                                            : "wavy-underline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:bg-[length:100%_100%] after:opacity-0 hover:after:opacity-100 lg:after:transition-opacity lg:after:duration-500"
                                    }`}
                                >
                                    {item.text}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    } else {
        return (
            <DropdownMenuRadioGroup value={activeSectionId}>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <DropdownMenuRadioItem
                                    value={item.id}
                                    className="text-t-fl-s focus:bg-neutral-100/90 dark:focus:bg-neutral-600/90"
                                >
                                    <Link href={`#${item.id}`} className="flex gap-s-fl-3xs">
                                        <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                            {item.icon}
                                        </BaseIcon>
                                        <span>{item.text}</span>
                                    </Link>
                                </DropdownMenuRadioItem>
                            </li>
                        ))}
                    </ul>
                </nav>
            </DropdownMenuRadioGroup>
        )
    }
}
