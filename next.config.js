/** @type {import('next').NextConfig} */

module.exports = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
                pathname: "/2mfu638sar6t/**",
            },
        ],
        loader: "custom",
        loaderFile: "./src/lib/contentful-image-loader.js",
    },
}
