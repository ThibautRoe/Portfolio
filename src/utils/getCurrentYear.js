export default function getCurrentYear() {
    const date = new Date()
    const year = date.getFullYear();

    return year
}