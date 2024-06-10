const prompt = require('prompt-sync')();

let s1 = parseInt(prompt("Digite o tamanho da primeira reta: "))
let s2 = parseInt(prompt("Digite o tamanho da segunda reta: "))
let s3 = parseInt(prompt("Digite o tamanho da terceira reta: "))

if ((s1 < s2 + s3) && (s2 < s1 + s3) && (s3 < s2 + s1)){
    console.log(`É possível formar um triângulo com essas medidas!`)
} else {
    console.log(`Não é possível formar um triângulo com essas medidas!`)
}