const cliente = require("./cliente.json")

function encontar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontar(cliente,"nome","Kirby")
console.log(encontrado)

const encontrado2 = encontar(cliente,"telefone","1918820860")
console.log(encontrado2)

