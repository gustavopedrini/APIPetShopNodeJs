const ServiceAtendimento = require('../services/atendimento')
const service = new ServiceAtendimento()

class ControllerAtendimento{
    async GetAtendimento(req,res){
        try{
            const resultado = await service.GetAtendimento(req.params.atendimento_id)
            res.status(200).json({
                atendimento: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetAtendimentos(_,res){
        try{
            const resultado = await service.GetAtendimentos()
            res.status(200).json({
                atendimentos: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddAtendimento(req,res){
        try{
            const resultado = await service.AddAtendimento(req.body.data, req.body.hora, req.body.valor, req.body.concluido, req.body.cachorro_id)
            res.status(200).json({
                atendimento: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateAtendimento(req,res){
        try{
            const resultado = await service.UpdateAtendimento(req.params.atendimento_id, req.body.data, req.body.hora, req.body.valor, req.body.concluido, req.body.cachorro_id)
            res.status(200).json({
                cliente: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async DeleteAtendimento(req,res){
        try{
            const resultado = await service.DeleteAtendimento(req.params.atendimento_id)
            res.status(200).json({
                cliente: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerAtendimento