import "./AnimatedMouse.css"

export default function AnimatedMouse() {
    return (
        <div className="animated-mouse relative aspect-[9/16] w-s-fl-m rounded-s-fl-xs border-2 border-neutral-50">
            <div className="animated-mouse-pointer absolute left-1/2 top-[70%] -translate-x-1/2 aspect-square w-s-fl-3xs rounded-full bg-neutral-50"></div>
        </div>
    )
}
