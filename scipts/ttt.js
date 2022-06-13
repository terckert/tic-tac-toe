const Player = (character, numberOfWins) => {
    const incrementWins = () => { this.numberOfWins++ }

    return {
        character, 
        numberOfWins,
        incrementWins
    }
}

let tim = Player('tim', 0)
console.log(`${tim.character} ${tim.numberOfWins}`)
tim.incrementWins()
console.log(`${tim.character} ${tim.numberOfWins}`)
