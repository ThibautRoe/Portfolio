import "./play-button.css"

export default function PlayButton(props) {
    const { actionOnClick, className, width, height } = props

    return (
        <button className={className} onClick={actionOnClick} title="Lancer la lecture" aria-label="Lancer la lecture">
            <svg className="play-button-icon" width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                    className="stroke-solid"
                    fill="none"
                    stroke="currentColor"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
                />
                <path
                    className="stroke-dotted"
                    fill="none"
                    stroke="currentColor"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
                />
                <path
                    className="icon"
                    fill="currentColor"
                    d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                />
            </svg>
        </button>
    )
}
