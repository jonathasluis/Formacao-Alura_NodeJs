const PermissaoService = require('../services/permissaoService');

const permissaoService = new PermissaoService();

class PermissaoController {

    static async cadastrar(req, res) {
        try {
            const { nome, descricao } = req.body;
            const permissao = await permissaoService.cadastrar({ nome, descricao });
            res.status(201).json(permissao);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    }

    static async buscarTodos(req, res) {
        try {
            const permissao = await permissaoService.buscarTodos();
            res.status(200).json(permissao);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const permissao = await permissaoService.buscarPorId(id);
            res.status(200).json(permissao);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async editar(req, res) {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            const permissao = await permissaoService.editar({ id, nome, descricao });
            res.status(200).json(permissao);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            await permissaoService.deletar(id);
            res.status(200).send({ message: 'Permissao deletado com sucesso' });
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = PermissaoController;