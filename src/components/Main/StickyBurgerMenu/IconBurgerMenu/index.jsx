import "./icon-burger-menu.css"

export default function IconBurgerMenu({ isOpen }) {
    return (
        <svg
            className={`ham ${isOpen ? "active" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3em"
            strokeLinecap="round"
            strokeDasharray="40 121"
            viewBox="16 25 67 50"
            width="2.2em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path className="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path className="line middle" d="m 70,50 h -40" />
            <path className="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
    )
}
