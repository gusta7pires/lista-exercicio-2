const prompt = require('prompt-sync')();

let h = parseInt(prompt('Quantas horas de atividades físicas você teve no mês: '))

let points

if (h <= 10) {
    points = h * 2
}
else if (h > 10 && h <= 20) {
    points = 20 + ((h-10) * 5)
}
else {
    points = 70 + ((h-20) * 10)
}

let total = points * 0.05

console.log(`Você fez ${points} pontos, ganhando R$${total.toFixed(2)} no total`)