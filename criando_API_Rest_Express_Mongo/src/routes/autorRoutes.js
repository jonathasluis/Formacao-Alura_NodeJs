import express from 'express';
import autorController from '../controller/autorController.js';

const routes = express.Router();

routes.get('/autores', autorController.listaAutores);
routes.get('/autores/:id', autorController.listaAutoresPorId);
routes.post('/autores', autorController.cadastraAutor);
routes.delete('/autores/:id', autorController.deletaAutor);
routes.put('/autores/:id', autorController.atualizaAutor);

export default routes; 