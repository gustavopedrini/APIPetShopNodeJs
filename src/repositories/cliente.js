const Cliente = require('../models/cliente')
const Cachorro = require("../models/cachorro")

class RepositorieCliente{

    async GetCliente(cliente_id, transaction){
        return Cliente.findOne({
            where: { cliente_id },
            transaction,
            include: [ Cachorro ]
        })
    }

    async GetClientes(){
        return Cliente.findAll()
    }

    async AddCliente(nome, telefone){
        return Cliente.create({
            nome: nome,
            telefone: telefone
        })
    }

    async UpdateCliente(id, nome, telefone){
        return Cliente.update({
            nome: nome,
            telefone: telefone
        },{
            where: { cliente_id: id }
        })
    }

    async DeleteCliente(id){
        return Cliente.destroy({
            where: { cliente_id: id }
        })
    }
}

module.exports = RepositorieCliente