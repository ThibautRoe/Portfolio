export default function IconCode() {
    return (
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path strokeDasharray={64} strokeDashoffset={64} strokeWidth={2} d="M13 3L19 9V21H5V3H13">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="1.2s" values="64;0"></animate>
            </path>
            <path strokeDasharray={14} strokeDashoffset={14} d="M12.5 3V8.5H19">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="14;0"></animate>
            </path>
            <g strokeDasharray={8} strokeDashoffset={8} strokeWidth={2}>
                <path d="M10 13L8 15L10 17">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="2.5s" dur="0.4s" values="8;0"></animate>
                </path>
                <path d="M14 13L16 15L14 17">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="2.9s" dur="0.4s" values="8;0"></animate>
                </path>
            </g>
        </g>
    )
}
