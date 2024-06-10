const prompt = require('prompt-sync')();

let qtd_day
let qtd_year
let min_lost = 10 //10 minutos de vida por cada cigarro

qtd_day = parseInt(prompt('Quantos cigarros você fuma por dia: '))
qtd_year = parseInt(prompt('Quantos anos você fuma: '))

let total_min = (qtd_year * 365 * qtd_day * min_lost)

let days = Math.floor(total_min / 60 / 24)
let hours = Math.floor((total_min / 60) % 24)
let mins = Math.floor(total_min % 60)

console.log(`Você perdeu ${days} dias, ${hours} horas e ${mins} minutos por causa do fumo`)
