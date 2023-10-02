const livros = require('./listaLivros');
const util = require('./Util');

for(let atual = 0; atual < livros.length; atual++){
    let menor = util.menorValor(livros, atual);
    util.swap(livros, atual, menor);
}

console.log(livros);