const express = require('express');
const {authMiddleware} = require('../middleware/auth');

const ControllerAtendimento = require('../controllers/atendimento');
const controller = new ControllerAtendimento();

const router = express.Router();

router.get('/api/getatendimento/:atendimento_id', authMiddleware, controller.GetAtendimento);
router.get('/api/getatendimentos', authMiddleware, controller.GetAtendimentos);
router.post('/api/addatendimento', authMiddleware, controller.AddAtendimento);
router.put('/api/updateatendimento/:atendimento_id', authMiddleware, controller.UpdateAtendimento);
router.delete('/api/deleteatendimento/:atendimento_id', authMiddleware, controller.DeleteAtendimento);

module.exports = router;