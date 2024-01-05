"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import React from "react"

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
}

export default function AnimatedText(props) {
    const ref = useRef(null)
    const controls = useAnimation()
    const animation = props.animation ? props.animation : defaultAnimations
    const once = props.once
    const isInView = useInView(ref, { amount: 0.5, once })
    const textArray = Array.isArray(props.text) ? props.text : [props.text]
    const wrapper = props.el ? props.el : "p"

    useEffect(() => {
        let timeout
        const show = () => {
            controls.start("visible")
            if (props.repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden")
                    controls.start("visible")
                }, props.repeatDelay)
            }
        }

        if (isInView) {
            show()
        } else {
            controls.start("hidden")
        }

        return () => clearTimeout(timeout)
    }, [isInView])

    return (
        <>
            {React.createElement(
                wrapper,
                { className: props.className },
                <>
                    <span className="sr-only">{textArray.join(" ")}</span>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {},
                        }}
                        aria-hidden
                    >
                        {textArray.map((line, lineIndex) => (
                            <span className="block" key={`${line}-${lineIndex}`}>
                                {line.split(" ").map((word, wordIndex) => (
                                    <span className="inline-block" key={`${word}-${wordIndex}`}>
                                        {word.split("").map((char, charIndex) => (
                                            <motion.span key={`${char}-${charIndex}`} className="inline-block" variants={animation}>
                                                {char}
                                            </motion.span>
                                        ))}
                                        <span className="inline-block">&nbsp;</span>
                                    </span>
                                ))}
                            </span>
                        ))}
                    </motion.span>
                </>
            )}
        </>
    )
}
