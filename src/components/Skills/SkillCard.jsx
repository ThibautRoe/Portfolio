"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { useMotionValue, useSpring, useTransform, AnimatePresence, motion } from "framer-motion"

export default function SkillCard({ item }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const springConfig = { stiffness: 100, damping: 5 }
    const x = useMotionValue(0)
    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2
        x.set(event.nativeEvent.offsetX - halfWidth)
    }

    return (
        <div className="relative" onMouseEnter={() => setHoveredIndex(item.id)} onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence mode="wait">
                {hoveredIndex === item.id && (
                    <div className="absolute -top-s-fl-l left-1/2 -translate-x-1/2 z-40">
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
                            className="rounded-s-fl-3xs bg-neutral-200 text-neutral-600 shadow-xl py-s-fl-3xs px-s-fl-2xs"
                        >
                            <div className="font-bold text-t-fl-s">{item.name}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            {item.officialWebsite ? (
                <Link key={`link-${item.id}`} href={item.officialWebsite} target="_blank" rel="noopener noreferrer">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <div
                            onMouseMove={handleMouseMove}
                            className="skill-card rounded-s-fl-xs h-s-fl-2xl w-s-fl-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-s-fl-2xs shadow-md lg:hover:shadow-lg"
                        >
                            <Image src={item.iconUrl} alt={item.name} width={100} height={100} />
                        </div>
                    </motion.div>
                </Link>
            ) : (
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <div
                        onMouseMove={handleMouseMove}
                        className="skill-card rounded-s-fl-xs h-s-fl-2xl w-s-fl-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-s-fl-2xs shadow-md lg:hover:shadow-lg"
                    >
                        <Image src={item.iconUrl} alt={item.name} width={100} height={100} />
                    </div>
                </motion.div>
            )}
        </div>
    )
}
