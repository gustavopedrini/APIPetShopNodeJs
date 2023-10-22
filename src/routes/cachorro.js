const express = require('express');
const {authMiddleware} = require('../middleware/auth');

const ControllerCachorro = require('../controllers/cachorro')
const controller = new ControllerCachorro();

const router = express.Router();

router.get('/api/getcachorro/:cachorro_id', authMiddleware, controller.GetCachorro)
router.get('/api/getcachorros', authMiddleware, controller.GetCachorros)
router.post('/api/addcachorro', authMiddleware, controller.AddCachorro)
router.put('/api/updatecachorro/:cachorro_id', authMiddleware, controller.UpdateCachorro)
router.delete('/api/deletecachorro/:cachorro_id', authMiddleware, controller.DeleteCachorro)

module.exports = router;