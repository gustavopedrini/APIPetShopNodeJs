const ServiceCliente = require('../services/cliente')
const service = new ServiceCliente()

class ControllerCliente{
    async GetCliente(req,res){
        try{
            const resultado = await service.GetCliente(req.params.cliente_id)
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

    async GetClientes(_,res){
        try{
            const resultado = await service.GetClientes()
            res.status(200).json({
                clientes: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddCliente(req,res){
        try{
            const resultado = await service.AddCliente(req.body.email, req.body.senha, req.body.nome, req.body.telefone)
            res.status(200).json({
                clientes: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateCliente(req,res){
        try{
            const resultado = await service.UpdateCliente(req.params.id, req.body.nome, req.body.telefone)
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

    async DeleteCliente(req,res){
        try{
            const resultado = await service.DeleteCliente(req.params.id)
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

    async GetCachorrosCliente(req,res){
        try{
            const resultado = await service.GetCachorrosCliente(req.params.cliente_id)
            res.status(200).json({
                cachorros: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerCliente