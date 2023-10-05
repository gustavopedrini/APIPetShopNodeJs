const Cliente = require('../models/cliente')
const Cachorro = require('../models/cachorro')

class RepositorieCliente{

    async GetCliente(id, transaction){
        return Cliente.findOne({
            where: { id },
            transaction
        },{
            include: ['cachorros']
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
            where: { id }
        })
    }

    async DeleteCliente(id){
        return Cliente.destroy({
            where: { id }
        })
    }

    async GetCachorrosCliente(id){
        return Cachorro.findAll({
            where: { dono: id }
        })
    }
}

module.exports = RepositorieCliente