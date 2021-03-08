export function saveToLocal(key, values) {
    return (localStorage.setItem(key, JSON.stringify(values))
    )
}

export function loadFromLocal(key) {
    return (JSON.parse(localStorage.getItem(key)))
}