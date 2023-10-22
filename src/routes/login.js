const express = require('express');

const ControllerLogin = require('../controllers/login')
const controller = new ControllerLogin();

const router = express.Router();

router.post('/api/login', controller.Logar)

module.exports = router;