import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

export default class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro) {
        const mensagenErro = Object.values(erro.errors).map((erro) => erro.message).join('; ');
        super(`Os seguintes erros foram encontrados: ${mensagenErro}`);
    }
}