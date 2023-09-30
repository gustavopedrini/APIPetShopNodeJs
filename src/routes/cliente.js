const express = require('express')
const ControllerCliente = require('../controllers/cliente')

const controller = new ControllerCliente()
const router = express.Router()

// router.get('/api/adicionarcliente', controller.AdicionarCliente())
router.post('/api/getcliente/:id', controller.GetCliente)
router.post('/api/getclientes', controller.GetClientes)
// router.put('/api/alterarcliente/:id', controller.AlterarCliente())
// router.delete('/api/removercliente/:id', controller.RemoverCliente())

module.exports = router