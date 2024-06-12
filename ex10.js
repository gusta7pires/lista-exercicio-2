const prompt = require('prompt-sync')();

let soma = 0
let menor = undefined
let media = 0
let par = 0

do {
    let n = parseFloat(prompt('Digite um número: '))

    soma += n

    if (menor === undefined || n < menor){
        menor = n
    }

    media++

    if (n % 2 === 0){
        par++
    }

} while(continuar() === 's')

media = soma/media

console.log(`A soma dos números: ${soma}`)
console.log(`O menor número: ${menor}`)
console.log(`A média dos números: ${media}`)
console.log(`Quantidade de pares: ${par}`)

function continuar(){
    return prompt('Continuar? (s para sim ou n para não): ')
}