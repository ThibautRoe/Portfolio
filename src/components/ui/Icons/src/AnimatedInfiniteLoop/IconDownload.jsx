export default function IconChevronRight() {
    return (
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path fill="none" strokeDasharray={14} strokeDashoffset={14} d="M6 19h12">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5" dur="0.4s" values="14;0"></animate>
            </path>
            <path fill="currentColor" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5">
                <animate
                    attributeName="d"
                    calcMode="linear"
                    begin="0.9"
                    dur="1.5s"
                    keyTimes="0;0.7;1"
                    repeatCount="indefinite"
                    values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                ></animate>
            </path>
        </g>
    )
}
