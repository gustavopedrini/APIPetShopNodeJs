const ServiceFuncionario = require('../services/funcionario')
const service = new ServiceFuncionario()

class ControllerFuncionario{
    
    async GetFuncionario(req,res){
        try{
            const resultado = await service.GetFuncionario(req.params.usuario_id)
            res.status(200).json({
                funcionario: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetFuncionarios(_,res){
        try{
            const resultado = await service.GetFuncionarios()
            res.status(200).json({
                funcionarios: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddFuncionario(req,res){
        try{
            const resultado = await service.AddFuncionario(req.body.email, req.body.senha)
            res.status(200).json({
                funcionario: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateFuncionario(req,res){
        try{
            const resultado = await service.UpdateFuncionario(req.params.id, req.body.email, req.body.senha)
            res.status(200).json({
                funcionario: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async DeleteFuncionario(req,res){
        try{
            const resultado = await service.DeleteFuncionario(req.params.id)
            res.status(200).json({
                funcionario: resultado
            })

        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerFuncionario