export default function contentfulImageLoader({ src, width, quality }) {
    return `${src}?${width ? `w=${width}&` : ""}q=${quality || 75}`
}
