import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import AnimatedButton from "@/components/AnimatedButton"

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col gap-s-fl-xl items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800 ">
            <p className="text-t-fl-4xl">Perdu ?</p>
            <AnimatedButton link="/" text="Accueil" iconBefore={faChevronRight} systemButton />
        </div>
    )
}
