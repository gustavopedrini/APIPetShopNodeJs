const express = require('express')
const ControllerUsuario = require('../controllers/usuario')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerUsuario()
const router = express.Router()

router.post('/api/loginusuario', controller.LoginUsuario)
router.get('/api/getusuario/:usuario_id', authMiddleware, controller.GetUsuario)
router.get('/api/getusuarios', authMiddleware, controller.GetUsuarios)
router.post('/api/addusuario', authMiddleware, controller.AddUsuario)
router.put('/api/updateusuario/:id', authMiddleware, controller.UpdateUsuario)
router.delete('/api/deleteusuario/:id', authMiddleware, controller.DeleteUsuario)

module.exports = router