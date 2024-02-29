"use client"

import { useState, useEffect } from "react"

export default function useTouchOnlyDevice() {
    const [touchOnlyDevice, setTouchOnlyDevice] = useState()

    useEffect(() => {
        setTouchOnlyDevice(!window.matchMedia("(any-hover: hover) and (pointer: fine)").matches)
    }, [])

    return touchOnlyDevice
}
