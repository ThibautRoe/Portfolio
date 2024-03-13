export default function IconMail({ delay }) {
    const defaultDelay = 0.5
    const delayToApply = typeof delay !== "undefined" ? delay : defaultDelay

    return (
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
            <rect width={18} height={14} x={3} y={5} strokeDasharray={64} strokeDashoffset={64} rx={1}>
                <animate fill="freeze" attributeName="stroke-dashoffset" begin={`${delayToApply}s`} dur="1.2s" values="64;0"></animate>
            </rect>
            <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5L12 12L21 6.5">
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin={`${delayToApply + 1.2}s`}
                    dur="0.8s"
                    values="24;0"
                ></animate>
            </path>
        </g>
    )
}
