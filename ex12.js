console.log('10 primeiros números da sequência de Fibonacci:')

let n1 = 1
let n2 = 1

console.log(`1: ${n1}`)
console.log(`2: ${n2}`)

for (let i = 2; i < 10; i++){
    let soma = n1 + n2

    n1 = n2
    n2 = soma

    console.log(`${i+1}: ${soma}`)
}
