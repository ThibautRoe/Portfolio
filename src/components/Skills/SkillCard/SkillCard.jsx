import Link from "next/link"

export default function SkillCard({ name, icon, url }) {
    const iconUrl = "https:" + icon?.fields.file.url

    if (url) {
        return (
            <div className="h-20 w-20">
                <Link href={url} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                    <div className="flex h-full w-full flex-col content-center justify-center">
                        {icon && <img src={iconUrl} alt={name} className="m-auto h-1/2 w-1/2" />}
                        <p className="text-center">{name}</p>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="flex h-20 w-20">
                <div>
                    {icon && (
                        <div className="relative h-20 w-auto overflow-hidden">
                            <img src={iconUrl} alt={name} className="absolute object-cover" />
                        </div>
                    )}
                    <p>{name}</p>
                </div>
            </div>
        )
    }
}
