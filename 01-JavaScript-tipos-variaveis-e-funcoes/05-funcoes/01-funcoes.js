//Declaração
function imprimeTexto(texto) {
    console.log(texto);
}

function somaDec(params1,param2) {
    return +params1 + +param2
}
imprimeTexto(somaDec(1,"2"))

// expressao de funcao
const soma = function(num1,num2) {return num1+num2}
console.log(soma(1,2))

//Arrow
const apresentarArrow = texto => console.log("ssss");