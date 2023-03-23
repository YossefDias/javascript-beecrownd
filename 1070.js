var lines = input.split(" ");

let inteiro = parseInt(lines.shift());
let contadorImpares = 0;

while (contadorImpares < 6) {
  if (inteiro % 2 !== 0) {
    console.log(inteiro);
    contadorImpares++;
  }

  inteiro++;
}