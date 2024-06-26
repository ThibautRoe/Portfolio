"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { useMotionValue, useSpring, useTransform, AnimatePresence, motion } from "framer-motion"
import useTouchOnlyDevice from "@/hooks/useTouchOnlyDevice"

export default function SkillCard({ item }) {
    const touchOnlyDevice = useTouchOnlyDevice()
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
      <div
        className="relative"
        onMouseEnter={() => {
          if (!touchOnlyDevice) {
            setHoveredIndex(item.id)
          }
        }}
        onMouseLeave={() => {
          if (!touchOnlyDevice) {
            setHoveredIndex(null)
          }
        }}
      >
        <AnimatePresence>
          {hoveredIndex === item.id && (
            <div className="absolute -top-s-fl-l left-1/2 -translate-x-1/2 z-30">
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
                className="rounded-s-fl-3xs bg-neutral-200 shadow-xl py-s-fl-3xs px-s-fl-2xs"
              >
                <div className="font-bold text-t-fl-s text-neutral-600">
                  {item.name}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {item.officialWebsite ? (
          <Link
            key={`link-${item.id}`}
            href={item.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              tabIndex="-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div
                onMouseMove={handleMouseMove}
                className="skill-card flex justify-center items-center rounded-s-fl-xs w-s-fl-2xl h-s-fl-2xl p-s-fl-2xs overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 shadow-md lg:hover:shadow-lg"
              >
                <Image
                  src={item.iconUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full"
                />
              </div>
            </motion.div>
          </Link>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div
              onMouseMove={handleMouseMove}
              className="skill-card flex justify-center items-center rounded-s-fl-xs w-s-fl-2xl h-s-fl-2xl p-s-fl-2xs overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 shadow-md lg:hover:shadow-lg"
            >
              <Image
                src={item.iconUrl}
                alt={item.name}
                width={100}
                height={100}
                className="max-w-full max-h-full"
              />
            </div>
          </motion.div>
        )}
      </div>
    )
}
