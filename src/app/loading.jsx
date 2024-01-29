import Loader from "@/components/Loader"

export default function Loading() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300">
            <Loader />
        </div>
    )
}
