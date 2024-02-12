export default function BaseIcon(props) {
    const { className, width, height, viewBox, children } = props

    return (
        <svg className={className ? className : ""} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    )
}
