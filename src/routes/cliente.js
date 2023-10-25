const express = require('express');
const authMiddleware = require('../middleware/auth');

const ControllerCliente = require('../controllers/cliente')
const controller = new ControllerCliente();

const router = express.Router();

router.get('/api/getcliente/:cliente_id', authMiddleware([0, 1, 2]), controller.GetCliente)
router.get('/api/getclientes', authMiddleware([0, 1, 2]), controller.GetClientes)
router.post('/api/addcliente', authMiddleware([2]), controller.AddCliente)
router.put('/api/updatecliente/:id', authMiddleware([0, 1, 2]), controller.UpdateCliente)
router.delete('/api/deletecliente/:id', authMiddleware([2]), controller.DeleteCliente)
router.get('/api/getcachorroscliente/:cliente_id', authMiddleware([0, 1, 2]), controller.GetCachorrosCliente)

module.exports = router;