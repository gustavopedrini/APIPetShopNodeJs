const Cachorro = require('../models/cachorro')
const Atendimento = require("../models/atendimento");

class RepositorieCachorro{

    async GetCachorro(cachorro_id){
        return Cachorro.findOne({
            where: { cachorro_id },
            include: [ Atendimento ]
        })
    }

    async GetCachorros(){
        return Cachorro.findAll()
    }

    async AddCachorro(nome, cliente_id){
        return Cachorro.create({
            nome: nome,
            cliente_id: cliente_id
        })
    }

    async UpdateCachorro(cachorro_id, nome, cliente_id){
        Cachorro.update({
            nome: nome,
            cliente_id: cliente_id
        },{
            where: { cachorro_id }
        })

        return ({message: `Cachorro ${cachorro_id} atualizado com sucesso!`})
    }

    async DeleteCachorro(cachorro_id){
        Atendimento.destroy({
            where: { cachorro_id: cachorro_id }
        })

        Cachorro.destroy({
            where: { cachorro_id }
        })

        return ({message: `Cachorro ${cachorro_id} deletado com sucesso!`})
    }
}

module.exports = RepositorieCachorro