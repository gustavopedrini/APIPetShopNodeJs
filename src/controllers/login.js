const ServiceLogin = require('../services/login')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config")
const service = new ServiceLogin()

class ControllerLogin{
    async Logar(req,res){
        const {email, senha} = req.body;

        if(!email || !senha){ // Validar se o email e senha foram preenchidos
            res.status(401).json({
                message: "E-mail ou senha inválidos." 
            })
        }

        const { dataValues: usuario } = await service.GetLoginPorEmail(email) 

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
            nivel_permissao: usuario.nivel_permissao
        },
            config.secret
        )

        res.json({
            token
        })
    }
}

module.exports = ControllerLogin