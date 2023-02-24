const id = () => {
    const key = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "i", "I", "1", "2", "3", "4", "5", "6", "7"]
    return `${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}`
}

module.exports = { id }