import Link from "next/link"
import "./AnimatedMouse.css"

export default function AnimatedMouse() {
    return (
        <Link href="#about" aria-label="Aller à la section suivante">
            <div className="color-transition animated-mouse relative aspect-[9/16] w-s-fl-m rounded-s-fl-xs border-2 border-neutral-600 dark:border-neutral-50">
                <div className="color-transition animated-mouse-pointer absolute left-1/2 top-[70%] -translate-x-1/2 aspect-square w-s-fl-3xs rounded-full bg-neutral-600 dark:bg-neutral-50"></div>
            </div>
        </Link>
    )
}
