export default function IconMail() {
    return (
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
            <rect width={18} height={14} x={3} y={5} strokeDasharray={64} strokeDashoffset={64} rx={1}>
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5" dur="1.2s" values="64;0"></animate>
            </rect>
            <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5L12 12L21 6.5">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7" dur="0.8s" values="24;0"></animate>
            </path>
        </g>
    )
}
