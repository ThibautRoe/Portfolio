"use client"

import { useEffect, useState } from "react"

export default function useDarkMode() {
    const [darkmode, setDarkMode] = useState("dark")

    useEffect(() => {
        const root = window.document.documentElement
        const darkModeLocalStorage = localStorage.getItem("darkmode")

        // if (!darkModeLocalStorage || (darkModeLocalStorage && darkModeLocalStorage === "dark")) {
        //     setDarkMode("dark")
        //     root.classList.add("dark")
        // }

        if (darkModeLocalStorage && darkModeLocalStorage === "light") {
            setDarkMode("light")
            root.classList.remove("dark")
            root.classList.add("light")
        }
    }, [])

    return darkmode
}
