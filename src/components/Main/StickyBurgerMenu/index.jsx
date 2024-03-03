"use client"

import { useState } from "react"
import IconBurgerMenu from "@/components/Main/StickyBurgerMenu/IconBurgerMenu"

export default function StickyBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="z-10 sticky hidden lg:block h-0 max-w-[min(100dvw,var(--grid-max-width))] mx-auto px-[--grid-gutter] top-s-fl-s-m">
            <div className="flex justify-end">
                <button aria-label="Menu de navigation" onClick={() => setIsOpen(!isOpen)}>
                    <IconBurgerMenu isOpen={isOpen} />
                </button>
            </div>
        </div>
    )
}
