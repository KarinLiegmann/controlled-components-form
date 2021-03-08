function saveToLocal(key, values) {
    return (localStorage.setItem(key, JSON.stringify([values]))
    )
}

function loadFromLocal(key) {
    try {
        JSON.parse(localStorage.getItem(key))
    } catch (error) {
        (error) => console.error(error)
    }
}

export { saveToLocal, loadFromLocal }