const RepositorieAtendimento = require('../repositories/atendimento')
const repositorie = new RepositorieAtendimento()

class ServiceAtendimento{

    async GetAtendimento(atendimento_id){
        if(isNaN(atendimento_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.GetAtendimento(atendimento_id)
    }

    async GetAtendimentos(){
        return repositorie.GetAtendimentos()
    }

    async AddAtendimento(data, hora, valor, concluido, cachorro_id){
        return repositorie.AddAtendimento(data, hora, valor, concluido, cachorro_id)
    }

    async UpdateAtendimento(atendimento_id, data, hora, valor, concluido, cachorro_id){
        if(isNaN(atendimento_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.UpdateAtendimento(atendimento_id, data, hora, valor, concluido, cachorro_id)
    }

    async DeleteAtendimento(atendimento_id){
        if(isNaN(atendimento_id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.DeleteAtendimento(atendimento_id)
    }
}

module.exports = ServiceAtendimento