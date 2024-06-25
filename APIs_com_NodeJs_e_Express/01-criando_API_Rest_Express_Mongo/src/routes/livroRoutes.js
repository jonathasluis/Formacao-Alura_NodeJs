import express from 'express';
import LivroController from '../controller/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listaLivros);
routes.get('/livros/busca', LivroController.listaLivrosPorEditora);
routes.get('/livros/:id', LivroController.listaLivrosPorId);
routes.post('/livros', LivroController.cadastraLivro);
routes.delete('/livros/:id', LivroController.deletaLivro);
routes.put('/livros/:id', LivroController.atualizaLivro);


export default routes; 