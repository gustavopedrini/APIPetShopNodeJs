const RepositorieCachorro = require('../repositories/cachorro')
const repositorie = new RepositorieCachorro()

class ServiceCachorro{

    async GetCachorro(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.GetCachorro(id)
    }

    async GetCachorros(){
        return repositorie.GetCachorros()
    }

    async AddCachorro(nome, dono){
        return repositorie.AddCachorro(nome, dono)
    }

    async UpdateCachorro(id, nome, dono){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.UpdateCachorro(id,nome,dono)
    }

    async DeleteCachorro(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.DeleteCachorro(id)
    }
}

module.exports = ServiceCachorro