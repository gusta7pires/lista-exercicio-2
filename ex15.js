const prompt = require('prompt-sync')();

let nums = []

for(let i=0; i<10; i++){
    nums[i] = parseInt(prompt(`Digite um número inteiro: `))
}

console.log(`Números pares no vetor e suas posições:`)
for(let i=0; i<nums.length; i++){
    if(nums[i]%2 === 0){
        console.log(`posição ${i}: ${nums[i]}`)
    }
}