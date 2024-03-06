"use client"

import { useState } from "react"
import IconBurgerMenu from "@/components/Main/StickyBurgerMenu/IconBurgerMenu"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Navigation from "@/components/Navigation"

export default function StickyBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="z-10 sticky hidden lg:block h-0 max-w-[min(100dvw,var(--grid-max-width))] mx-auto px-[--grid-gutter] top-s-fl-s-m">
            <div className="flex justify-end">
                {/* TODO : normalement shadcn utilise tailwindcss-animate, moi j'utilise tailwindcss-animated, voir pour adapter */}
                <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
                    <DropdownMenuTrigger aria-label="Menu de navigation" className="focus:outline-none">
                        <IconBurgerMenu isOpen={isOpen} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="bg-neutral-200/90 dark:bg-neutral-700/90 text-neutral-800 dark:text-neutral-50"
                    >
                        <DropdownMenuLabel className="text-center text-t-fl-base font-bold">Navigation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Navigation header={false} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
