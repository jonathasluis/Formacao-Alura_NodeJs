import { documentoColecao } from './dbConnect.js';

function encontrarDocumento(nomeDocumento) {
    return documentoColecao.findOne({ nome: nomeDocumento });
}

function atualizaDocumento(nomeDocumento, texto) {
    return documentoColecao.updateOne(
        { nome: nomeDocumento },
        { $set: { texto: texto } }
    );
}

function obterDocumentos() {
    return documentoColecao.find().toArray();
}

function adicionarDocumento(nomeDocumento) {
    return documentoColecao.insertOne({
        nome: nomeDocumento,
        texto: ''
    });
}

function excluirDocumento(nomeDocumento) {
    return documentoColecao.deleteOne({ nome: nomeDocumento });
}

export { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento };