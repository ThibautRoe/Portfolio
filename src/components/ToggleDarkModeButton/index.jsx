import "./ToggleDarkModeButton.css"

export default function ToggleDarkModeButton() {
    function toggleDarkMode() {
        const root = window.document.documentElement
        console.log(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)

        if (!root.classList.contains("dark") && !root.classList.contains("light")) {
            root.classList.add("dark")
        }

        if (root.classList.contains("light")) {
            root.classList.remove("light")
            root.classList.add("dark")
        } else if (root.classList.contains("dark")) {
            root.classList.remove("dark")
            root.classList.add("light")
        }
    }

    return (
        <button className="absolute bottom-3 right-3" onClick={() => toggleDarkMode()}>
            Mode
        </button>
    )
}
