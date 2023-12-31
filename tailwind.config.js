/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            neutral: colors.neutral,
            custom: {
                300: "#fcd44d",
                400: "#fbc024",
                500: "#f59f0a",
                600: "#ff9921",
                700: "#d97806",
                800: "#ac5d00",
            },
        },
        minHeight: {
            screen: "100dvh",
        },
        extend: {
            screens: {
                tiny: { raw: "(max-height: 420px)" },
            },
            fontFamily: {
                nunito: ["var(--font-nunito)"],
                paytoneOne: ["var(--font-paytoneOne)"],
                gloriaHallelujah: ["var(--font-gloriaHallelujah)"],
            },
            fontSize: {
                "t-fl-4xl": ["var(--step-5)", { lineHeight: "120%" }],
                "t-fl-3xl": ["var(--step-4)", { lineHeight: "120%" }],
                "t-fl-2xl": ["var(--step-3)", { lineHeight: "120%" }],
                "t-fl-xl": ["var(--step-2)", { lineHeight: "120%" }],
                "t-fl-l": ["var(--step-1)", { lineHeight: "120%" }],
                "t-fl-base": ["var(--step-0)", { lineHeight: "120%" }],
                "t-fl-s": ["var(--step--1)", { lineHeight: "120%" }],
                "t-fl-xs": ["var(--step--2)", { lineHeight: "120%" }],
            },
            spacing: {
                "s-fl-3xl": "var(--space-3xl)",
                "s-fl-2xl": "var(--space-2xl)",
                "s-fl-xl": "var(--space-xl)",
                "s-fl-l": "var(--space-l)",
                "s-fl-m": "var(--space-m)",
                "s-fl-s": "var(--space-s)",
                "s-fl-xs": "var(--space-xs)",
                "s-fl-2xs": "var(--space-2xs)",
                "s-fl-3xs": "var(--space-3xs)",
                // One-up pairs
                "s-fl-2xl-3xl": "var(--space-2xl-3xl)",
                "s-fl-xl-2xl": "var(--space-xl-2xl)",
                "s-fl-l-xl": "var(--space-l-xl)",
                "s-fl-m-l": "var(--space-m-l)",
                "s-fl-s-m": "var(--space-s-m)",
                "s-fl-xs-s": "var(--space-xs-s)",
                "s-fl-2xs-xs": "var(--space-2xs-xs)",
                "s-fl-3xs-2xs": "var(--space-3xs-2xs)",
            },
            borderRadius: {
                "s-fl-3xl": "var(--space-3xl)",
                "s-fl-2xl": "var(--space-2xl)",
                "s-fl-xl": "var(--space-xl)",
                "s-fl-l": "var(--space-l)",
                "s-fl-m": "var(--space-m)",
                "s-fl-s": "var(--space-s)",
                "s-fl-xs": "var(--space-xs)",
                "s-fl-2xs": "var(--space-2xs)",
                "s-fl-3xs": "var(--space-3xs)",
                // One-up pairs
                "s-fl-2xl-3xl": "var(--space-2xl-3xl)",
                "s-fl-xl-2xl": "var(--space-xl-2xl)",
                "s-fl-l-xl": "var(--space-l-xl)",
                "s-fl-m-l": "var(--space-m-l)",
                "s-fl-s-m": "var(--space-s-m)",
                "s-fl-xs-s": "var(--space-xs-s)",
                "s-fl-2xs-xs": "var(--space-2xs-xs)",
                "s-fl-3xs-2xs": "var(--space-3xs-2xs)",
            },
            inset: {
                "s-fl-3xl": "var(--space-3xl)",
                "s-fl-2xl": "var(--space-2xl)",
                "s-fl-xl": "var(--space-xl)",
                "s-fl-l": "var(--space-l)",
                "s-fl-m": "var(--space-m)",
                "s-fl-s": "var(--space-s)",
                "s-fl-xs": "var(--space-xs)",
                "s-fl-2xs": "var(--space-2xs)",
                "s-fl-3xs": "var(--space-3xs)",
                // One-up pairs
                "s-fl-2xl-3xl": "var(--space-2xl-3xl)",
                "s-fl-xl-2xl": "var(--space-xl-2xl)",
                "s-fl-l-xl": "var(--space-l-xl)",
                "s-fl-m-l": "var(--space-m-l)",
                "s-fl-s-m": "var(--space-s-m)",
                "s-fl-xs-s": "var(--space-xs-s)",
                "s-fl-2xs-xs": "var(--space-2xs-xs)",
                "s-fl-3xs-2xs": "var(--space-3xs-2xs)",
            },
        },
    },
    plugins: [],
}
