const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

somaDasNotas = 0

for (let nota of notas) {//forEach
  somaDasNotas += nota;
}

media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);