const express = require('express')
const ControllerAtendimento = require('../controllers/atendimento')

const controller = new ControllerAtendimento()
const router = express.Router()

router.get('/api/getatendimento/:atendimento_id', controller.GetAtendimento)
router.get('/api/getatendimentos', controller.GetAtendimentos)
router.post('/api/addatendimento', controller.AddAtendimento)
router.put('/api/updateatendimento/:atendimento_id', controller.UpdateAtendimento)
router.delete('/api/deleteatendimento/:atendimento_id', controller.DeleteAtendimento)

module.exports = router