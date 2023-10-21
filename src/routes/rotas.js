const express = require('express')
const ControllerLogin = require('../controllers/login')
const ControllerFuncionario = require('../controllers/funcionario')
const ControllerCliente = require('../controllers/cliente')
const ControllerCachorro = require('../controllers/cachorro')
const ControllerAtendimento = require('../controllers/atendimento')
const authMiddleware = require('../middleware/auth')

const controllerlogin = new ControllerLogin()
const controllerfuncionario = new ControllerFuncionario()
const controllercliente = new ControllerCliente()
const controllercachorro = new ControllerCachorro()
const controlleratendimento = new ControllerAtendimento()
const router = express.Router()

// =================== LOGIN =================== //
router.post('/api/login', controllerlogin.Logar)

// =================== FUNCIONÁRIOS =================== //
router.get('/api/getfuncionario/:usuario_id', authMiddleware, controllerfuncionario.GetFuncionario)
router.get('/api/getfuncionarios', authMiddleware, controllerfuncionario.GetFuncionarios)
router.post('/api/addfuncionario', authMiddleware, controllerfuncionario.AddFuncionario)
router.put('/api/updatefuncionario/:id', authMiddleware, controllerfuncionario.UpdateFuncionario)
router.delete('/api/deletefuncionario/:id', authMiddleware, controllerfuncionario.DeleteFuncionario)

// =================== CLIENTES =================== //
router.get('/api/getcliente/:cliente_id', authMiddleware, controllercliente.GetCliente)
router.post('/api/addcliente', authMiddleware, controllercliente.AddCliente)
router.get('/api/getclientes', authMiddleware, controllercliente.GetClientes)
router.put('/api/updatecliente/:id', authMiddleware, controllercliente.UpdateCliente)
router.delete('/api/deletecliente/:id', authMiddleware, controllercliente.DeleteCliente)
router.get('/api/getcachorroscliente/:cliente_id', authMiddleware, controllercliente.GetCachorrosCliente)

// =================== CACHORRO =================== //
router.get('/api/getcachorro/:cachorro_id', authMiddleware, controllercachorro.GetCachorro)
router.get('/api/getcachorros', authMiddleware, controllercachorro.GetCachorros)
router.post('/api/addcachorro', authMiddleware, controllercachorro.AddCachorro)
router.put('/api/updatecachorro/:cachorro_id', authMiddleware, controllercachorro.UpdateCachorro)
router.delete('/api/deletecachorro/:cachorro_id', authMiddleware, controllercachorro.DeleteCachorro)

// =================== ATENDIMENTO =================== //
router.get('/api/getatendimento/:atendimento_id', authMiddleware, controlleratendimento.GetAtendimento)
router.get('/api/getatendimentos', authMiddleware, controlleratendimento.GetAtendimentos)
router.post('/api/addatendimento', authMiddleware, controlleratendimento.AddAtendimento)
router.put('/api/updateatendimento/:atendimento_id', authMiddleware, controlleratendimento.UpdateAtendimento)
router.delete('/api/deleteatendimento/:atendimento_id', authMiddleware, controlleratendimento.DeleteAtendimento)

module.exports = router