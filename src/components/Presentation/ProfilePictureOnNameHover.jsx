import { useState } from "react"
import { useMotionValue, useSpring, useTransform, AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import ProfilePicture from "@/public/images/profile_picture.webp"

export default function ProfilePictureOnNameHover({ name }) {
    const [showProfilePicture, setShowProfilePicture] = useState(false)
    const springConfig = { stiffness: 100, damping: 5 }
    const x = useMotionValue(0)
    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
    const translateX = useSpring(useTransform(x, [-175, 175], [-300, 300]), springConfig)
    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2
        x.set(event.nativeEvent.offsetX - halfWidth)
    }

    return (
        <div
            className="inline relative cursor-pointer"
            onMouseEnter={() => setShowProfilePicture(true)}
            onMouseLeave={() => setShowProfilePicture(false)}
        >
            <AnimatePresence mode="wait">
                {showProfilePicture && (
                    <div className="absolute bottom-s-fl-xl left-1/2 -translate-x-1/2 z-30 w-[9.5em] aspect-square">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            style={{
                                translateX: translateX,
                                rotate: rotate,
                                whiteSpace: "nowrap",
                            }}
                        >
                            <Image src={ProfilePicture} alt="Photo de profil de Thibaut Roegiers" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <span className="font-bold underline decoration-dotted underline-offset-[0.175em]" onMouseMove={handleMouseMove}>
                {name}
            </span>
        </div>
    )
}
