import { inserirLinkDocumentos, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obterDocumentos",(documentos) => {
    documentos.forEach(( documento ) => {
        inserirLinkDocumentos(documento.nome);
    });
});

function emitirAdicionarDocumento(nomeDocumento) {
    socket.emit("adicionar_documento", nomeDocumento);
}

socket.on("adicionar_documento_interface", (nomeDocumento) => {
    inserirLinkDocumentos(nomeDocumento);
});

socket.on("documento_existente", (nome) => {
    alert(`Documento ${nome} já existe`);
});

socket.on("excluir_documento_sucesso", (nome) => {
    removerLinkDocumento(nome);
});

export { emitirAdicionarDocumento };