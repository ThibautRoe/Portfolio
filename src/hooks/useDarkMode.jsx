"use client"

import { useEffect, useState } from "react"

export default function useDarkMode() {
    const [darkmode, setDarkMode] = useState("")

    useEffect(() => {
        const root = document.documentElement
        const darkModeLocalStorage = localStorage.theme

        if (darkModeLocalStorage === "dark" || (!darkModeLocalStorage && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            root.classList.add("dark")
            setDarkMode("dark")
        } else {
            root.classList.remove("dark")
            setDarkMode("light")
        }
    }, [])

    return darkmode
}
