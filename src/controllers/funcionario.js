const ServiceFuncionario = require('../services/funcionario')
const jwt = require("jsonwebtoken")
const config = require("../config")
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
        const {email, senha} = req.body;

        if(!email || !senha){ // Validar se o email e senha foram preenchidos
            res.status(401).json({
                message: "E-mail ou senha não foram preenchidos corretamente." 
            })
        }

        const decodedToken = jwt.verify(req.headers['authorization'], config.secret);
        const nivelPermissao = decodedToken.nivel_permissao;

        if (nivelPermissao === 0 ) {
            const resultado = await service.AddFuncionario(req.body.email, req.body.senha)
            res.status(200).json({
                funcionario: resultado
            })
        }else{
            res.status(401).json({
                message: "Permissão Inválida."
            })
        }
    }

    async UpdateFuncionario(req,res){
        const decodedToken = jwt.verify(req.headers['authorization'], config.secret);
        const nivelPermissao = decodedToken.nivel_permissao;

        if (nivelPermissao === 0 || nivelPermissao === 2) {
            const resultado = await service.UpdateFuncionario(req.params.id, req.body.email, req.body.senha)
            res.status(200).json({
                funcionario: resultado
            })
        }else{
            res.status(401).json({
                message: "Permissão Inválida."
            })
        }
    }

    async DeleteFuncionario(req,res){
        const decodedToken = jwt.verify(req.headers['authorization'], config.secret);
        const nivelPermissao = decodedToken.nivel_permissao;

        if (nivelPermissao === 0 || nivelPermissao === 2) {
            const resultado = await service.DeleteFuncionario(req.params.id)
            res.status(200).json({
                funcionario: resultado
            })
        }else{
            res.status(401).json({
                message: "Permissão Inválida."
            })
        }
    }
}

module.exports = ControllerFuncionario