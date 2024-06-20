import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function getCurrentAge() {
    const dateToday = new Date()
    const dateOfBirth = new Date(Date.UTC(1989, 5, 21, 22, 0, 0))
    // 5 et pas 6 pour Juin car c'est le monthIndex (Janvier = 0) Ici c'est le 21/06/1989 à 22h00 UTC soit le 22/06/1989 à 0h00 GMT+2
    let age = dateToday.getFullYear() - dateOfBirth.getFullYear()
    const monthDiff = dateToday.getMonth() - dateOfBirth.getMonth()

    if (monthDiff < 0) {
      age--
    } else if (monthDiff === 0 && dateToday.getDate() < dateOfBirth.getDate()) {
      age--
    }

    return age
}

export function getCurrentYear() {
    const date = new Date()
    const year = date.getFullYear()

    return year
}
