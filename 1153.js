var lines = input.split(" ");

let inteiro = parseInt(lines);
let acumulador = 1;

for (let i = 1; i <= inteiro; i++) {
  acumulador *= i;
}

console.log(acumulador);