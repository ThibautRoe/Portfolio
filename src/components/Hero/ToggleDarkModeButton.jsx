import BaseIcon from "@/components/Icons/BaseIcon"
import IconTheme from "@/components/Icons/src/AnimatedOnRender/IconTheme"

export default function ToggleDarkModeButton() {
    let toogleTimer

    function toggleDarkMode() {
        clearTimeout(toogleTimer)

        const root = document.documentElement

        root.style.setProperty("--color-transition-duration", "2s")

        if (root.classList.contains("light")) {
            root.classList.remove("light")
            root.classList.add("dark")
            localStorage.setItem("darkmode", "dark")
        } else if (root.classList.contains("dark")) {
            root.classList.remove("dark")
            root.classList.add("light")
            localStorage.setItem("darkmode", "light")
        }

        toogleTimer = setTimeout(() => {
            root.style.setProperty("--color-transition-duration", "0s")
        }, 2000)
    }

    return (
        <button
            className="absolute z-10 right-[--grid-gutter] top-s-fl-m lg:top-auto lg:bottom-s-fl-m"
            onClick={toggleDarkMode}
            title="Mode sombre / clair"
            aria-label="Mode sombre / clair"
        >
            <BaseIcon width="2em" height="2em" viewBox="0 0 24 24">
                <IconTheme />
            </BaseIcon>
        </button>
    )
}
