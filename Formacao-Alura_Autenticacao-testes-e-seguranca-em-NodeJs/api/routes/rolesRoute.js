const {Router} = require('express');
const RolesController = require('../controllers/rolesController');

const router = Router();

router.post('/roles', RolesController.cadastrar);
router.get('/roles', RolesController.buscarTodos);
router.get('/roles/:id', RolesController.buscarPorId);
router.delete('/roles/:id', RolesController.deletar);
router.put('/roles/:id', RolesController.editar);

module.exports = router;