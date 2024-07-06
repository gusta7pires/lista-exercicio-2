const prompt = require('prompt-sync')();

console.log('Progressão Aritmética')

let termo = parseInt(prompt('Digite o primeiro termo da PA: '))
const razao = parseInt(prompt('Digite a razão da PA: '))

let soma = 0

for(let i = 0; i < 10; i++){
    console.log(`${i+1}: ${termo}`)
    soma+=termo
    termo+=razao
}

console.log(`A soma de todos os elementos: ${soma}`)