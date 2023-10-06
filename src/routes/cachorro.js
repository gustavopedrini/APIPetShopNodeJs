const express = require('express')
const ControllerCachorro = require('../controllers/cachorro')

const controller = new ControllerCachorro()
const router = express.Router()

router.get('/api/getcachorro/:cachorro_id', controller.GetCachorro)
router.get('/api/getcachorros', controller.GetCachorros)
router.post('/api/addcachorro', controller.AddCachorro)
router.put('/api/updatecachorro/:cachorro_id', controller.UpdateCachorro)
router.delete('/api/deletecachorro/:cachorro_id', controller.DeleteCachorro)

module.exports = router