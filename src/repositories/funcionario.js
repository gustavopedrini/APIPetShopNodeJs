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

    async AddFuncionario(email, senha){
        const hashSenha = await bcrypt.hash(senha, 12)
        const result = await Funcionario.create(
            {email, senha: hashSenha, nivel_permissao: 2}
        )
        return result
    }

    async UpdateFuncionario(id, email, senha){
        Funcionario.update({
            email: email,
            senha: senha
        },{
            where: { usuario_id: id }
        })

        return ({message: `Funcionário ${id} atualizado com sucesso!`})
    }

    async DeleteFuncionario(id){
        Funcionario.destroy({
            where: { usuario_id: id }
        })

        return ({message: `Funcionário ${id} deletado com sucesso!`})
    }
}

module.exports = RepositorieFuncionario