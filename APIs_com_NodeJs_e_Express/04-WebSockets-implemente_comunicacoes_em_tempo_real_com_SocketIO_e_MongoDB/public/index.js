import "./socket-front-index.js";
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

form.addEventListener("submit",(evento) => {
    evento.preventDefault();
    emitirAdicionarDocumento(inputDocumento.value);
    inputDocumento.value = "";
});

function inserirLinkDocumentos(nome) {
    listaDocumentos.innerHTML += `
        <a 
            href="documento.html?nome=${nome}" 
            class="list-group-item list-group-item-action"
            id="documento-${nome}"
            >
            ${nome}
        </a>
    `;
}

function removerLinkDocumento(nomeDocumento) {
    const documento = document.getElementById(`documento-${nomeDocumento}`)
    listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumentos, removerLinkDocumento };

