
export const createCharacter = (array, id) => (
    array.find(character => character.id === id)
)

export const removeCharacter = (array, id) => (
    array.filter(item => item.id !== id)
)