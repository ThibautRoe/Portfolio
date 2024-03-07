export default function IconHome() {
    return (
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path strokeDasharray={21} strokeDashoffset={21} d="M5 21H19">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="21;0"></animate>
            </path>
            <path strokeDasharray={15} strokeDashoffset={15} d="M5 21V8M19 21V8">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="15;0"></animate>
            </path>
            <path strokeDasharray={24} strokeDashoffset={24} d="M9 21V13H15V21">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.8s" values="24;0"></animate>
            </path>
            <path strokeDasharray={26} strokeDashoffset={26} d="M2 10L12 2L22 10">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.8s" values="26;0"></animate>
            </path>
        </g>
    )
}
