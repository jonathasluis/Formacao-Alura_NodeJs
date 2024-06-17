import { autor } from "../models/Autor.js";

class AutorController {

    static async listaAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar autores` });
        }
    }

    static async listaAutoresPorId(req, res) {
        try {
            const listaAutores = await autor.findById(req.params.id);
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar autor por id` });
        }
    }

    static async cadastraAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }

    static async deletaAutor(req, res) {
        try {
            await autor.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: "Deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao deletar autor por id` });
        }
    }

    static async atualizaAutor(req, res) {
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar autor por id` });
        }
    }
}

export default AutorController;