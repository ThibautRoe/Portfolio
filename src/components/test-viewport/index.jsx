// Voir sinon https://mantine.dev/hooks/use-viewport-size/

"use client"

import { useRef, useEffect } from "react"

export default function TestViewport() {
    const viewportWidthTextRef = useRef(null)

    useEffect(() => {
        function updateViewportWidth() {
            const viewportWidthText = viewportWidthTextRef.current

            if (viewportWidthText) {
                viewportWidthText.innerText = window.innerWidth + "px"
            }
        }

        window.addEventListener("resize", updateViewportWidth)

        return () => {
            window.removeEventListener("resize", updateViewportWidth)
        }
    }, [])

    return <p ref={viewportWidthTextRef} id="viewportWidthText" className="text-t-fl-l h-12"></p>
}
