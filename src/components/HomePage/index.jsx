"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"

export default function HomePage({ skills, projects }) {
    const [activeSectionId, setActiveSectionId] = useState("home")

    useEffect(() => {
        let sections = []
        let timeouts = []

        const sectionObserver = new IntersectionObserver(
            (sections, observer) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        timeouts[section.target.id] = setTimeout(() => {
                            setActiveSectionId(section.target.id)
                            // window.location.hash = section.target.id
                        }, 250)
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
        }, 500) //Timeout because document.querySelectorAll() returns an empty array if triggered too soon

        return () => {
            sectionObserver.disconnect()
            timeouts.forEach((timeout) => clearTimeout(timeout))
        }
    }, [])

    return (
        <>
            <Header activeSectionId={activeSectionId} />
            <Main activeSectionId={activeSectionId} skills={skills} projects={projects} />
            <Footer />
        </>
    )
}
