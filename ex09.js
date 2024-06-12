const prompt = require('prompt-sync')();

let funcionarios = []

let con = 's'

while (con === 's') {
    let sal = parseFloat(prompt('Digite o salário do funcionário: '))
    let sex = prompt('Digite o sexo do funcionário: ')

    let func = {salario: sal, sexo: sex}

    funcionarios.push(func)

    con = prompt("Adicionar mais um funcionário (s para sim e n para não)?: ")
}


let sal_sexo = {};

funcionarios.forEach (funcionario => {
    if (sal_sexo[funcionario.sexo]) {
        sal_sexo[funcionario.sexo] += funcionario.salario
    } else {
        sal_sexo[funcionario.sexo] = funcionario.salario
    }
})

for (let sexo in sal_sexo){
    console.log(`Pessoas do sexo ${sexo} ganham R$${sal_sexo[sexo].toFixed(2)} ao todo`)
}
