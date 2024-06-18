const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.nomeDoModel = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        try {
            return dataSource[this.nomeDoModel].findAll();
        } catch (error) {
            return { error: error.message };
        }
    }

    async pegaUmRegistroPorId(id) {
        try {
            return  dataSource[this.nomeDoModel].findByPk(id);
        } catch (error) {
            return { error: error.message };
        }
    }

    async criaRegistro(dadosDoRegistro) {
        try {
            return dataSource[this.nomeDoModel].create(dadosDoRegistro);
        } catch (error) {
            return { error: error.message };
        }
    }

    async atualizaRegistro(dadosAtualizados, id) {
        try {
            const listaDeRegistrosAtualizados = dataSource[this.nomeDoModel].update(dadosAtualizados, { where: { id: id } });
            if (listaDeRegistrosAtualizados[0] === 0) {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            return { error: error.message };
        }
    }

    async exluiRegistro(id) {
        try {
            return dataSource[this.nomeDoModel].destroy({ where: { id: id } });
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = Services;