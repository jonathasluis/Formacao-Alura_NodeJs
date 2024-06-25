import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listaLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar livros` });
        }
    }

    static async listaLivrosPorId(req, res) {
        try {
            const listaLivros = await livro.findById(req.params.id);
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar livro por id` });
        }
    }

    static async cadastraLivro(req, res) {
        try {
            const novoLivro = req.body;
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {
                ...novoLivro, autor: {
                    ...
                    autorEncontrado._doc
                }
            };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async deletaLivro(req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: "Deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao deletar livro por id` });
        }
    }

    static async atualizaLivro(req, res) {
        try {
            await livro.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar livro por id` });
        }
    }

    static async listaLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const listaLivrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(listaLivrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar livros por editora` });
        }
    }
}

export default LivroController;