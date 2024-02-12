import Confetti from "react-confetti-boom"

export default function ConfettiBoom({ position }) {
    return (
        <div className="fixed inset-0">
            <Confetti
                mode="boom"
                x={position.x}
                y={position.y}
                particleCount={70}
                spreadDeg={50}
                colors={["#ff577f", "#ff884b", "#ffd384", "#fff9b0"]}
            />
        </div>
    )
}
