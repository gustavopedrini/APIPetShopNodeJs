const RepositorieCliente = require('../repositories/cliente')
const cliente = new RepositorieCliente()

class ServiceCliente{

    async GetCliente(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return cliente.GetCliente(id)
    }

    async GetClientes(){
        return cliente.GetClientes()
    }
}

module.exports = ServiceCliente