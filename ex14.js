const prompt = require('prompt-sync')();

let names = []

for (let i = 0; i < 7; i++){
    names[i] = prompt(`Digite o ${i+1}º nome: `)
}

console.log('Nomes informados na ordem inversa: ')
for (let i = names.length-1; i >= 0; i--){
    console.log(names[i])
}