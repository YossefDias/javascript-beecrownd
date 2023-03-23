var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const space = ' ';
const [codigo1, quant1, valor1] = lines[0].split(space);
const [codigo2, quant2, valor2] = lines[1].split(space);

const valorPago = (quant1 * valor1) + (quant2 * valor2);

console.log (`VALOR A PAGAR: R$ ${valorPago.toFixed(2)}`)