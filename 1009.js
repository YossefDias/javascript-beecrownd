var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const[nome, salario, vendas] = lines

const comissao = 0.15

const total = Number(salario) + (Number(vendas) * comissao)

console.log (`TOTAL = R$ ${total.toFixed(2)}`)
