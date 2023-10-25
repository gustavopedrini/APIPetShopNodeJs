const express = require('express');

const ControllerUsuario = require('../controllers/usuario')
const controller = new ControllerUsuario();

const router = express.Router();

router.post('/api/loginusuario', controller.Logar)

module.exports = router;