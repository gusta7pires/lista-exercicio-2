const prompt = require('prompt-sync')();

let names = []
let ages = []

for(let i=0; i<9; i++){
    names[i] = prompt('Digite o nome: ')
    ages[i] = prompt('Digite a idade dele(a): ')
}


console.log('Menores de idade:')
for(let i=0; i<ages.length; i++){
    if(ages[i]<18){
        console.log(`${names[i]} de ${ages[i]} anos`)
    }
}