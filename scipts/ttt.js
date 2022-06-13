/**
 * 
 * @param {string} name 
 * @param {string} character 
 * @param {number} numberOfWins
 * @returns 
 */
const Player = (name, character, numberOfWins) => {
    const incrementWins = () => numberOfWins++
    // Getters
    const getName = () => name
    const getNumberOfWins = () => numberOfWins
    const getCharacter = () => character
    // Setters
    const setName = newName => name = newName

    return {
        getName, 
        getNumberOfWins,
        getCharacter,
        setName,
        incrementWins
    }
}

let tim = Player('tim', 'x', 0)
console.log(`${tim.getName()} ${tim.getNumberOfWins()}`)
tim.incrementWins()
tim.setName('timothy')
console.log(`${tim.getName()} ${tim.getNumberOfWins()}`)
