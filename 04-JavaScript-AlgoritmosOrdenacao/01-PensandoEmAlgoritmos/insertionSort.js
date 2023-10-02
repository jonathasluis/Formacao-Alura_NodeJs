const livros = require('./listaLivros');
const util = require('./Util');

function insertionSort(listaOrigem) {
    let lista = listaOrigem;
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            util.swap(lista, analise, analise - 1);
            analise--;
        }
    }


    return lista;
}

insertionSort(livros);
console.log(livros);