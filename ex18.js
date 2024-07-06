const prompt = require('prompt-sync')();

let funcionario = {
    nome: prompt('Nome do funcionário: '),
    cargo: prompt('Cargo do funcionário: '),
    salario: parseFloat(prompt('Salário do funcionário: ')),

    mostrarInfo: function() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Salário: R$${this.salario.toFixed(2)}`)
    }
}

funcionario.mostrarInfo()