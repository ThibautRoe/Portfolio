export default function IconChevronRight() {
    return (
        <g transform="translate(24 0) scale(-1 1)">
            <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={10}
                strokeDashoffset={10}
                strokeLinecap="round"
                strokeWidth={2}
                d="M8 12L15 5M8 12L15 19"
            >
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5" dur="0.6s" values="10;0"></animate>
            </path>
        </g>
    )
}
