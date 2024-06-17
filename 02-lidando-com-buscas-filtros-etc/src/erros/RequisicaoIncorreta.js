import ErroBase from "./ErroBase.js";

export default class RequisicaoIncorreta extends ErroBase {
    constructor(mensagem = "Um ou mais dados estão incorretos") {
        super(mensagem, 400);
    }
}