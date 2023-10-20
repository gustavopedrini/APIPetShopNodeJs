const ServiceUsuario = require('../services/usuario')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config")
const service = new ServiceUsuario()

class ControllerUsuario{
    async LoginUsuario(req,res){
        const {email, senha} = req.body;

        if(!email || !senha){ // Validar se o email e senha foram preenchidos
            res.status(401).json({
                message: "E-mail ou senha inválidos."
            })
        }

        const { dataValues: usuario } = await service.GetUsuarioPorEmail(email) 

        if(!usuario){ // Validar se o usuário realmente existe com esse email
            res.status(401).json({
                message: "E-mail ou senha inválidos."
            })
        }

        if(!(await bcrypt.compare(senha, usuario.senha))){ // Validar se a senha do usuário está correta
            res.status(401).json({
                message: "E-mail ou senha inválidos."
            })
        }

        const token = jwt.sign({ // NUNCA COLOCAR SENHA AQUI!!!
            usuario_id: usuario.usuario_id,
            email: usuario.email,
            nivel_permissao: usuario.nivel_permissao // arrumar
        },
            config.secret
        )

        res.json({
            token
        })
    }
    
    async GetUsuario(req,res){
        try{
            const resultado = await service.GetUsuario(req.params.usuario_id)
            res.status(200).json({
                usuario: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetUsuarios(_,res){
        try{
            const resultado = await service.GetUsuarios()
            res.status(200).json({
                usuarios: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddUsuario(req,res){
        try{
            const resultado = await service.AddUsuario(req.body.email, req.body.senha)
            res.status(200).json({
                usuarios: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateUsuario(req,res){
        try{
            const resultado = await service.UpdateUsuario(req.params.id, req.body.email, req.body.senha)
            res.status(200).json({
                usuario: resultado
            })
        }catch{
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async DeleteUsuario(req,res){
        try{
            const resultado = await service.DeleteUsuario(req.params.id)
            res.status(200).json({
                usuario: resultado
            })
        }catch{
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerUsuario