const database = require('../models');
const uuid = require('uuid');

class RoleService {
    async cadastrar(dto) {
        try {
            const role = await database.roles.findOne({
                where: {
                    nome: dto.nome
                }
            });
            if (role) {
                throw new Error('Role já cadastrado');
            }

            const roleCriado = await database.roles.create({
                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao
            });

            return roleCriado;
        } catch (error) {
            throw new Error("Erro ao cadastrar role");
        }
    }

    async buscarTodosRoles() {
        try {
            const roles = await database.roles.findAll();
            return roles;
        } catch (error) {
            throw new Error("Erro ao buscar roles");
        }
    }

    async buscarRolePorId(id) {
        try {
            const role = await database.roles.findOne({
                where: {
                    id: id
                }
            });

            if (!role) {
                throw new Error('Role não encontrado');
            }
            return role;
        } catch (error) {
            throw new Error("Erro ao buscar Role");
        }
    }

    async editarRole(dto) {
        try {
            console.log(dto);
            const role = await this.buscarRolePorId(dto.id);
            role.nome = dto.nome;
            role.descricao = dto.descricao;
            await role.save();

            return role;
        } catch (error) {
            throw new Error("Erro ao editar role");
        }
    }

    async deletarRole(id) {
        try {
            const role = await this.buscarRolePorId(id);
            await role.destroy();
        } catch (error) {
            throw new Error("Erro ao deletar role");
        }
    }
}

module.exports = RoleService;