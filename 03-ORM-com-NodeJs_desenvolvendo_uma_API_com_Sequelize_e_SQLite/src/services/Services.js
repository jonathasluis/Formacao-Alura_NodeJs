const { or } = require('sequelize');
const dataSource = require('../database/models');

class Services {
    constructor(nomeDoModel) {
        this.nomeDoModel = nomeDoModel;
    }

    async pegaTodosOsRegistros(where = {}) {
        try {
            return dataSource[this.nomeDoModel].findAll({ where: { ...where } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async pegaRegistrosPorEscopo(escopo) {
        try {
            return dataSource[this.nomeDoModel].scope(escopo).findAll();
        } catch (error) {
            return { error: error.message };
        }
    }

    async pegaUmRegistroPorId(id) {
        try {
            return dataSource[this.nomeDoModel].findByPk(id);
        } catch (error) {
            return { error: error.message };
        }
    }

    async pegaUmRegistro(where) {
        try {
            return dataSource[this.nomeDoModel].findOne({ where: { ...where } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async pegaEContaRegistros(options) {
        try {
            return dataSource[this.nomeDoModel].findAndCountAll({
                ...options
            });
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

    async atualizaRegistro(dadosAtualizados, where, transaction = {}) {
        try {
            const listaDeRegistrosAtualizados = await dataSource[this.nomeDoModel]
                .update(dadosAtualizados, {
                    where: { ...where },
                    transaction: transaction
                });
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