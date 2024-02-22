export default function ContentfulImageLoader({ src, width, quality }) {
    return `${src}?${width ? `w=${width}&` : ""}q=${quality || 75}`
}
