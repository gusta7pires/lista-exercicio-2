const prompt = require('prompt-sync')();

let player = parseInt(prompt('0 - Pedra, 1 - Papel, 2 - Tesoura: '))
let com = Math.floor(Math.random() * 3)

let p = choice(player)
let c = choice(com)

if (player === com){
    console.log('EMPATE')
} 
else if ((player === 0 && com === 2) || (player === 1 && com === 0) || (player === 2 && com === 1)){
    console.log(`${p} ganha de ${c}! Você ganhou!`)
}
else if ((player === 0 && com === 1) || (player === 1 && com === 2) || (player === 2 && com === 0)){
    console.log(`${p} perde de ${c}! Você perdeu!`)
}

function choice (i) {
    if (i === 0){
        return 'Pedra'
    } else if (i === 1){
        return 'Papel'
    } else if (i === 2){
        return 'Tesoura'
    } 
}