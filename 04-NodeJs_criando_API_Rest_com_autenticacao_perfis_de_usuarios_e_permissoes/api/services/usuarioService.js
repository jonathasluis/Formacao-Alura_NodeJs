const database = require('../models');
const { hash } = require('bcryptjs');
const e = require('express');
const uuid = require('uuid');

class usuarioService {
    async cadastrarUsuario(dto) {
        try {
            const usuario = await database.usuarios.findOne({
                where: {
                    email: dto.email
                }
            });
            if (usuario) {
                throw new Error('Email já cadastrado');
            }

            const senhaCriptografada = await hash(dto.senha, 8);

            const usuarioCriado = await database.usuarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaCriptografada
            });

            return usuarioCriado;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async buscarTodosUsuarios() {
        try {
            const usuarios = await database.usuarios.findAll();
            return usuarios;
        } catch (error) {
            throw new Error("Erro ao buscar usuários");
        }
    }

    async buscarUsuarioPorId(id) {
        try {
            const usuario = await database.usuarios.findOne({
                where: {
                    id: id
                }
            });

            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            return usuario;
        } catch (error) {
            throw new Error("Erro ao buscar usuário");
        }
    }

    async editarUsuario(dto) {
        try {
            const usuario = await this.buscarUsuarioPorId(dto.id);
            usuario.nome = dto.nome;
            usuario.email = dto.email;
            await usuario.save();

            return usuario;
        } catch (error) {
            throw new Error("Erro ao editar usuário");
        }
    }

    async deletarUsuario(id) {
        try {
            const usuario = await this.buscarUsuarioPorId(id);
            await usuario.destroy();
        } catch (error) {
            throw new Error("Erro ao deletar usuário");
        }
    }
}

module.exports = usuarioService;