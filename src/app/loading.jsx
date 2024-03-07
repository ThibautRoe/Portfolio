import Loader from "@/components/ui/loader"

export default function Loading() {
    return (
        <div className="fixed z-50 w-full h-full flex items-center justify-center bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800">
            <Loader />
        </div>
    )
}
