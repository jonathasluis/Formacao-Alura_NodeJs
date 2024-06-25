/*const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;*/

const notas = [10,6.5,8,7.5];

const media = (notas[0] + notas[1]+notas[2]+notas[3]) / notas.length;
console.log(media);
console.log(notas);

//adicionando nota
notas.push(10)
const medi2 = (notas[0] + notas[1]+notas[2]+notas[3]+notas[4]) / notas.length;
console.log(medi2);
console.log(notas);

//deletando nota
notas.pop()
const medi3 = (notas[0] + notas[1]+notas[2]+notas[3]) / notas.length;
console.log(medi3);
console.log(notas);