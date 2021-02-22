export default function saveToLocalStorage(key, values) {
    return (localStorage.setItem(key, JSON.stringify(values))
    )
}




