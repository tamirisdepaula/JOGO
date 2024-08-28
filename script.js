const result = document.querySelector(".result")
const HumanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    PEDRA: 'rock',
    PAPEL: 'paper',
    TESOURA: 'scissors'
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
    //console.log(humanChoice)
    console.log(playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const resultMachine = Math.floor(Math.random() * 3)

    console.log(resultMachine)

    return choices[resultMachine]
}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + "Maquina: " + machine)


    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    }
    else if (
        (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
        (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
        (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
    ) {
        humanScoreNumber++
        HumanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para ALexa'
    }

}
