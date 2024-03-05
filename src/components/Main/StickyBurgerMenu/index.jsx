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
import Navigation from "@/components/Header/Navigation"

export default function StickyBurgerMenu({ activeSectionId }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="z-10 sticky hidden lg:block h-0 max-w-[min(100dvw,var(--grid-max-width))] mx-auto px-[--grid-gutter] top-s-fl-s-m">
            <div className="flex justify-end">
                {/* TODO : normalement shadcn utilise tailwindcss-animate, moi j'utilise tailwindcss-animated car il y a un bug avec tailwindcss-animate pour la classe "duration" et les arbitrary values, voir si j'utilise duration-1000 au lieu de duration-[2s] pour mes transitions et si j'utilise tailwindcss-animate à la place de tailwindcss-animated */}
                <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
                    <DropdownMenuTrigger aria-label="Menu de navigation">
                        <IconBurgerMenu isOpen={isOpen} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="bg-neutral-200/90 dark:bg-neutral-700/90 text-neutral-800 dark:text-neutral-50"
                    >
                        <DropdownMenuLabel className="text-center text-t-fl-base font-bold">Navigation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Navigation header={false} activeSectionId={activeSectionId} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
