import Link from "next/link"
import Image from "next/image"

export default function SkillCard(props) {
    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2
        x.set(event.nativeEvent.offsetX - halfWidth)
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="skill-card rounded-s-fl-xs h-s-fl-2xl w-s-fl-2xl transform-gpu overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-s-fl-2xs drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:drop-shadow-lg"
        >
            {props.officialWebsite ? (
                <Link href={props.officialWebsite} target="_blank" rel="noopener noreferrer">
                    <Image src={props.iconUrl} alt={props.name} width={100} height={100} />
                </Link>
            ) : (
                <Image src={props.iconUrl} alt={props.name} width={100} height={100} />
            )}
        </div>
    )
}
