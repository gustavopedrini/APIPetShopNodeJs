const Funcionario = require('../models/usuario')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const config = require('../config')

class RepositorieFuncionario{

    async GetFuncionario(usuario_id, transaction){
        return Funcionario.findOne({
            where: { usuario_id, nivel_permissao: 2},
            transaction
        })
    }

    async GetFuncionarios(){
        return Funcionario.findAll({
            where: {nivel_permissao: 2}
        })
    }

    async AddFuncionario(email, senha, nivelPermissao){
        const hashSenha = await bcrypt.hash(senha, 12)
    
        if (nivelPermissao === 0) { // Se for ADMIN (nivel_permissao = 0), criará um ATENDENTE (nivel_permissao = 2).
            const result = await Funcionario.create(
                {email, senha: hashSenha, nivel_permissao: 2}
            )
            return result;

        } else { // Se NÃO for ADMIN (nivel_permissao = 0), criará um CLIENTE (nivel_permissao = 1).
            const result = await Funcionario.create(
                {email, senha: hashSenha, nivel_permissao: 1}
            )
            return result;
        }
    }

    async UpdateFuncionario(id, email, senha){
        return Funcionario.update({
            email: email,
            senha: senha
        },{
            where: { usuario_id: id }
        })
    }

    async DeleteFuncionario(id){
        return Funcionario.destroy({
            where: { usuario_id: id }
        })
    }
}

module.exports = RepositorieFuncionario