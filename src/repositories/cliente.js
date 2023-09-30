const Cliente = require('../models/cliente')

class RepositorieCliente{

    async GetCliente(id){
        return Cliente.findOne({
            where: { id }
        })
    }

    async GetClientes(){
        return Cliente.findAll()
    }
}

module.exports = RepositorieCliente