const express = require('express');
const authMiddleware = require('../middleware/auth');

const ControllerFuncionario = require('../controllers/funcionario')
const controller = new ControllerFuncionario();

const router = express.Router();

router.get('/api/getfuncionario/:usuario_id', authMiddleware([0, 2]), controller.GetFuncionario)
router.get('/api/getfuncionarios', authMiddleware([0, 2]), controller.GetFuncionarios)
router.post('/api/addfuncionario', authMiddleware([0]), controller.AddFuncionario)
router.put('/api/updatefuncionario/:id', authMiddleware([0, 2]), controller.UpdateFuncionario)
router.delete('/api/deletefuncionario/:id', authMiddleware([0]), controller.DeleteFuncionario)

module.exports = router;