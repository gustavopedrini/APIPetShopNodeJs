const express = require('express');
const {authFuncionario} = require('../middleware/auth');

const ControllerCliente = require('../controllers/cliente')
const controller = new ControllerCliente();

const router = express.Router();

router.get('/api/getcliente/:cliente_id', authFuncionario, controller.GetCliente)
router.post('/api/addcliente', authFuncionario, controller.AddCliente)
router.get('/api/getclientes', authFuncionario, controller.GetClientes)
router.put('/api/updatecliente/:id', authFuncionario, controller.UpdateCliente)
router.delete('/api/deletecliente/:id', authFuncionario, controller.DeleteCliente)
router.get('/api/getcachorroscliente/:cliente_id', authFuncionario, controller.GetCachorrosCliente)

module.exports = router;