const RoleService = require('../services/rolesService');

const roleService = new RoleService();

class RoleController {

    static async cadastrar(req, res) {
        try {
            const { nome, descricao } = req.body;
            const role = await roleService.cadastrar({ nome, descricao });
            res.status(201).json(role);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    }

    static async buscarTodos(req, res) {
        try {
            const role = await roleService.buscarTodosRoles();
            res.status(200).json(role);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const role = await roleService.buscarRolePorId(id);
            res.status(200).json(role);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async editar(req, res) {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            const role = await roleService.editarRole({ id, nome, descricao });
            res.status(200).json(role);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            await roleService.deletarRole(id);
            res.status(200).send({ message: 'Role deletado com sucesso' });
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = RoleController;