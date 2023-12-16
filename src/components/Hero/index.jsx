import Link from "next/link"
import dynamic from "next/dynamic"

const DynamicAnimation = dynamic(() => import("./Components/Animation"), { ssr: false })

export default function Hero() {
    return (
        <div className="from-custom-400 to-custom-300 bg-gradient-to-b">
            <div className="u-container u-grid grid-cols-2">
                <div className="gap-s-fl-xl flex flex-col">
                    <p className="font-gloriaHallelujah text-t-fl-l origin-top-left -rotate-6">👋 Hello, moi c’est Thibaut</p>
                    <p className="font-paytoneOne text-t-fl-3xl">Développeur web front-end</p>
                    <p>
                        J’adore &lt;coder /&gt; des sites modernes, dynamiques et <Link href="https://utopia.fyi/">fluid responsive !</Link>
                    </p>
                </div>
                <DynamicAnimation />
            </div>
        </div>
    )
}
