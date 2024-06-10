const prompt = require('prompt-sync')();

let car_vel = prompt('Qual a velocidade do carro (km/h): ')

if (car_vel > 80){
    let fine = (car_vel - 80) * 5
    console.log(`Você foi multado no valor de R$${fine.toFixed(2)}`)
} else {
    console.log(`Continue respeitando as leis de trânsito!`)
}