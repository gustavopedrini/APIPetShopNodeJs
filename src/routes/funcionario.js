const express = require('express');
const {authAdm, authFuncionario} = require('../middleware/auth');

const ControllerFuncionario = require('../controllers/funcionario')
const controller = new ControllerFuncionario();

const router = express.Router();

router.get('/api/getfuncionario/:usuario_id', authAdm, controller.GetFuncionario)
router.get('/api/getfuncionarios', authAdm, controller.GetFuncionarios)
router.post('/api/addfuncionario', authAdm, controller.AddFuncionario)
router.put('/api/updatefuncionario/:id', authAdm, controller.UpdateFuncionario)
router.delete('/api/deletefuncionario/:id', authAdm, controller.DeleteFuncionario)

module.exports = router;