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
        // Finalement je force le dark mode au tout 1er chargement de la page, avec "dark" en dur sur l'élément <html> dans layou

        if (darkModeLocalStorage && darkModeLocalStorage === "light") {
            setDarkMode("light")
            root.classList.remove("dark")
            root.classList.add("light")
        }
    }, [])

    return darkmode
}
