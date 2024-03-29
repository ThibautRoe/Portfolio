import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function getCurrentAge() {
    const dateToday = new Date()
    const dateOfBirth = new Date(1989, 5, 22, 12, 0, 0) // 5 et pas 6 pour Juin car c'est le monthIndex (Janvier = 0)
    const ageInMilliseconds = dateToday - dateOfBirth
    const age = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365)

    return age
}

export function getCurrentYear() {
    const date = new Date()
    const year = date.getFullYear()

    return year
}
