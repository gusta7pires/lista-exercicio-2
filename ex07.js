const prompt = require('prompt-sync')();

let type = parseInt(prompt('Carro alugado (0 - Popular ou 1 - Luxo): '))
let days = parseInt(prompt('Dias alugado: '))
let dist = parseInt(prompt('Quilômetros percorridos: '))

let total = 0

total += (type === 0 ? 90 : 150) * days + (dist > 100 ? ((100 * 0.2) + ((dist - 100) * 0.1)) : (dist * 0.2))

console.log(`Total a pagar: R$${total.toFixed(2)}`)