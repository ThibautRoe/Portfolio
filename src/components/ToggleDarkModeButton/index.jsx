import "./ToggleDarkModeButton.css"

export default function ToggleDarkModeButton() {
    function toggleDarkMode() {
        const root = window.document.documentElement

        if (root.classList.contains("light")) {
            root.classList.remove("light")
            root.classList.add("dark")
            localStorage.setItem("darkmode", "dark")
        } else if (root.classList.contains("dark")) {
            root.classList.remove("dark")
            root.classList.add("light")
            localStorage.setItem("darkmode", "light")
        }
    }

    return (
        <button className="absolute bottom-3 right-3" onClick={() => toggleDarkMode()}>
            Mode
        </button>
    )
}
