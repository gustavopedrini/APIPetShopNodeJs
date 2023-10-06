const RepositorieCachorro = require('../repositories/cachorro')
const repositorie = new RepositorieCachorro()

class ServiceCachorro{

    async GetCachorro(cachorro_id){
        if(isNaN(cachorro_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.GetCachorro(cachorro_id)
    }

    async GetCachorros(){
        return repositorie.GetCachorros()
    }

    async AddCachorro(nome, cliente_id){
        return repositorie.AddCachorro(nome, cliente_id)
    }

    async UpdateCachorro(cachorro_id, nome, cliente_id){
        if(isNaN(cachorro_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.UpdateCachorro(cachorro_id,nome,cliente_id)
    }

    async DeleteCachorro(cachorro_id){
        if(isNaN(cachorro_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.DeleteCachorro(cachorro_id)
    }
}

module.exports = ServiceCachorro