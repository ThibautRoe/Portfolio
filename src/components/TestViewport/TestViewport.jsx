"use client"

import { useEffect } from "react"

export default function TestViewport() {
    useEffect(() => {
        function updateViewportWidth() {
            const viewportWidth = typeof window !== "undefined" ? window.innerWidth || document.documentElement.clientWidth : null

            if (viewportWidth !== null) {
                document.getElementById("viewportWidth").innerText = viewportWidth + "px"
            }
        }

        // Appeler la fonction initiale
        updateViewportWidth()

        // Ajouter un écouteur d'événements pour la redimension de la fenêtre
        if (typeof window !== "undefined") {
            window.addEventListener("resize", updateViewportWidth)
        }
    }, []) // Le tableau vide signifie que cela s'exécutera uniquement après le montage initial.

    return <p id="viewportWidth" className="text-t-fl-l h-12"></p>
}
