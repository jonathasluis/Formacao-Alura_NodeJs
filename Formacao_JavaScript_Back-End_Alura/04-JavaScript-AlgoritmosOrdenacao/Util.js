function menorValor(array, Util) {
    let maisBarato = Util;

    for(let atual = Util; atual < array.length; atual++){
        if(array[atual].preco < array[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

function swap(lista, primeiro, segundo) {
    let posPrimeiro = lista[primeiro];
    let posSegundo = lista[segundo];
    lista[primeiro] = posSegundo;
    lista[segundo] = posPrimeiro;
}

module.exports = {menorValor, swap};