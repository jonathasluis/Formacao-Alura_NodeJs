const database = require('../models');
const uuid = require('uuid');

class PermissaoService {
    async cadastrar(dto) {
        try {
            const permissao = await database.permissoes.findOne({
                where: {
                    nome: dto.nome
                }
            });
            if (permissao) {
                throw new Error('Permissao já cadastrado');
            }

            const permissaoCriado = await database.permissoes.create({
                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao
            });

            return permissaoCriado;
        } catch (error) {
            throw new Error("Erro ao cadastrar permissao");
        }
    }

    async buscarTodos() {
        try {
            const permissoes = await database.permissoes.findAll();
            return permissoes;
        } catch (error) {
            throw new Error("Erro ao buscar permissoes");
        }
    }

    async buscarPorId(id) {
        try {
            const permissao = await database.permissoes.findOne({
                where: {
                    id: id
                }
            });

            if (!permissao) {
                throw new Error('Permissao não encontrado');
            }
            return permissao;
        } catch (error) {
            throw new Error("Erro ao buscar Permissao");
        }
    }

    async editar(dto) {
        try {
            console.log(dto);
            const permissao = await this.buscarPorId(dto.id);
            permissao.nome = dto.nome;
            permissao.descricao = dto.descricao;
            await permissao.save();

            return permissao;
        } catch (error) {
            throw new Error("Erro ao editar permissao");
        }
    }

    async deletar(id) {
        try {
            const permissao = await this.buscarPorId(id);
            await permissao.destroy();
        } catch (error) {
            throw new Error("Erro ao deletar permissao");
        }
    }
}

module.exports = PermissaoService;