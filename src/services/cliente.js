const RepositorieCliente = require('../repositories/cliente')
const cliente = new RepositorieCliente()

class ServiceCliente{

    async GetCliente(cliente_id, transaction){
        if(isNaN(cliente_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return cliente.GetCliente(cliente_id, transaction)
    }

    async GetClientes(){
        return cliente.GetClientes()
    }

    async AddCliente(nome, telefone){
        return cliente.AddCliente(nome, telefone)
    }

    async UpdateCliente(id, nome, telefone){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return cliente.UpdateCliente(id,nome,telefone)
    }

    async DeleteCliente(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return cliente.DeleteCliente(id)
    }

    async GetCachorrosCliente(cliente_id){
        if(isNaN(cliente_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return cliente.GetCachorrosCliente(cliente_id)
    }
}

module.exports = ServiceCliente