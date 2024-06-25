const database = require('../models');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret')

class AuthService {

    async login(dto) {
        const usuario = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: { email: dto.email }
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        console.log(dto);
        const senhaIguais = await compare(dto.senha, usuario.senha);

        if (!senhaIguais) {
            throw new Error('Senha incorreta');
        }

        const token = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonSecret.secret, {
            expiresIn: 86400
        });

        return { token };
    }
}

module.exports = AuthService;