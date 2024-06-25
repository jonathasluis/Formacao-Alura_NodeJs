const {Router} = require('express');
const PermissaoController = require('../controllers/permissaoController');

const router = Router();

router.post('/permissao', PermissaoController.cadastrar);
router.get('/permissao', PermissaoController.buscarTodos);
router.get('/permissao/:id', PermissaoController.buscarPorId);
router.delete('/permissao/:id', PermissaoController.deletar);
router.put('/permissao/:id', PermissaoController.editar);

module.exports = router;