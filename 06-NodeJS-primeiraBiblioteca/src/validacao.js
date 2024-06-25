async function listaValidada(listaLinks) {
    const lista = extraiLinks(listaLinks);
    const status = await checkStatus(lista);

    return listaLinks.map((objetoLink, index) => ({
        ...objetoLink,
        status: status[index]
    }))
}

function extraiLinks(listaLinks) {
    return listaLinks.map((objetoLink) => Object.values(objetoLink).join(''))
}

async function checkStatus(arrURL) {
    const arrayStatus = await Promise
        .all(
            arrURL.map(async (url) => {
                try {
                    const response = await fetch(url);
                    return response.status;
                } catch (erro) {
                    return trataErro(erro);
                }
            })
        )
    return arrayStatus;
}

function trataErro(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link Não encontrado';
    } else {
        return "Ocorreu um erro inesperado";
    }
}

export default listaValidada;