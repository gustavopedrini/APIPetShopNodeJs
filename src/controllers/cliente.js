const ServiceCliente = require('../services/cliente')
const service = new ServiceCliente()

class ControllerCliente{
    async GetCliente(req,res){
        try{
            const resultado = await service.GetCliente(req.params.id)
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
}

module.exports = ControllerCliente