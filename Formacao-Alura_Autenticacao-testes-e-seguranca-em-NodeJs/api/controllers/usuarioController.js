const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();
class usuarioController {

    static async cadastrar(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const usuario = await usuarioService.cadastrarUsuario({ nome, email, senha });
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async buscarTodosUsuarios(req, res) {
        try {
            const usuarios = await usuarioService.buscarTodosUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async buscarUsuarioPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = await usuarioService.buscarUsuarioPorId(id);
            res.status(200).json(usuario);
        } catch (error) {
            res.status(400).send({message : error.message})
        }
    }

    static async editarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email } = req.body;
            const usuario = await usuarioService.editarUsuario({ id, nome, email });
            res.status(200).json(usuario);
        } catch (error) {
            res.status(400).send({message : error.message})
        }
    }

    static async deletarUsuario(req, res) {
        try {
            const { id } = req.params;
            await usuarioService.deletarUsuario(id);
            res.status(200).send({message : 'Usuário deletado com sucesso'});
        } catch (error) {
            res.status(400).send({message : error.message})
        }
    }
}

module.exports = usuarioController;