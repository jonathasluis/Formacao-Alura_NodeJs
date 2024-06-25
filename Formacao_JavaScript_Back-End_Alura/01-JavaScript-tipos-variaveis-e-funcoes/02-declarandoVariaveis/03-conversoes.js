// tipo de dado e booleanos

// conversao implicita
const numer = 456;
const numeroString = '456'

console.log(numeroString===numer)//true
console.log(numeroString==numer)//false

console.log(numer + numeroString)

// conversao explicita
console.log(numer + Number(numeroString)) // passa Number() converte para numero 
console.log(numer + +numeroString)//ou usa "+" antes do valor
//se tiver um que nao seja numero = NaN