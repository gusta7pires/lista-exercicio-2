const prompt = require('prompt-sync')();

let p = 0
let n = Math.floor(Math.random() * 5) + 1

do {
    p = parseInt(prompt('Digite um número entre 1 e 5: '))

    if (p === n) {
        console.log(`Você acertou!`)
    }
    else {
        console.log(`Você errou! Tente de novo`)
    }
}while (p !== n)