"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

export default function AnimatedTooltip({ items }) {
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
        <>
            {items.map((item) => (
                <div
                    className="-mr-4 relative group"
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="wait">
                        {hoveredIndex === item.id && (
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
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                            >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
                                {item.officialWebsite ? <div className="text-white text-xs">Voir le site officiel</div> : null}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div
                        onMouseMove={handleMouseMove}
                        className="skill-card rounded-s-fl-xs h-s-fl-2xl w-s-fl-2xl transform-gpu overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-s-fl-2xs drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:drop-shadow-lg"
                    >
                        {item.officialWebsite ? (
                            <Link href={item.officialWebsite} target="_blank" rel="noopener noreferrer">
                                <Image src={item.iconUrl} alt={item.name} width={100} height={100} />
                            </Link>
                        ) : (
                            <Image src={item.iconUrl} alt={item.name} width={100} height={100} />
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}
