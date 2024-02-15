"use client"

import { useState, useEffect } from "react"

export default function useReduceMotion() {
    const [reduceMotion, setReduceMotion] = useState()

    useEffect(() => {
        setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    }, [])

    return reduceMotion
}
