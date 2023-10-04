const express = require('express')
const ControllerCachorro = require('../controllers/cachorro')

const controller = new ControllerCachorro()
const router = express.Router()

router.get('/api/getcachorro/:id', controller.GetCachorro)
router.get('/api/getcachorros', controller.GetCachorros)
router.post('/api/addcachorro', controller.AddCachorro)
router.put('/api/updatecachorro/:id', controller.UpdateCachorro)
router.delete('/api/deletecachorro/:id', controller.DeleteCachorro)

module.exports = router