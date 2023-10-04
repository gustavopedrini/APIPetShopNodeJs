const Cachorro = require('../models/cachorro')

class RepositorieCachorro{

    async GetCachorro(id){
        return Cachorro.findOne({
            where: { id }
        })
    }

    async GetCachorros(){
        return Cachorro.findAll()
    }

    async AddCachorro(nome, dono){
        return Cachorro.create({
            nome: nome,
            dono: dono
        })
    }

    async UpdateCachorro(id, nome, dono){
        return Cachorro.update({
            nome: nome,
            dono: dono
        },{
            where: { id }
        })
    }

    async DeleteCachorro(id){
        return Cachorro.destroy({
            where: { id }
        })
    }
}

module.exports = RepositorieCachorro