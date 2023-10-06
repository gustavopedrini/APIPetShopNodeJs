const express = require('express')
const ControllerCliente = require('../controllers/cliente')

const controller = new ControllerCliente()
const router = express.Router()

router.get('/api/getcliente/:cliente_id', controller.GetCliente)
router.get('/api/getclientes', controller.GetClientes)
router.post('/api/addcliente', controller.AddCliente)
router.put('/api/updatecliente/:id', controller.UpdateCliente)
router.delete('/api/deletecliente/:id', controller.DeleteCliente)
router.get('/api/getcachorroscliente/:cliente_id', controller.GetCachorrosCliente)

module.exports = router