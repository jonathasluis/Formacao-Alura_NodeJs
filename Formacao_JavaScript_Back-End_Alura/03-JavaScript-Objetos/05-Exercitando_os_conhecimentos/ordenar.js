const clientes = require('./cliente.json');

function ordenar(clientes, propridade) {
    return clientes.sort((a, b) => {
        if (a[propridade] < b[propridade]) {
            return -1;
        } else if (a[propridade] > b[propridade]) {
            return 1;
        } else {
            return 0;
        }
    })
}

const ordenados = ordenar(clientes,"nome");
console.log(ordenados);