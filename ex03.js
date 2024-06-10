const prompt = require('prompt-sync')();

let d = prompt('Quantos kilômetros quer percorrer: ')
let total

if (d > 200){
    total = (200 * 0.5) + ((d - 200) * 0.45)
} else {
    total = d * 0.5
}

console.log(`Total a pagar: R$${total.toFixed(2)}`)