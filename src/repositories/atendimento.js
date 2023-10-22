const Atendimento = require('../models/atendimento')
const Cachorro = require("../models/cachorro");

class RepositorieAtendimento{

    async GetAtendimento(atendimento_id){
        return Atendimento.findOne({
            where: { atendimento_id },
            include: [ Cachorro ]
        });
    }

    async GetAtendimentos(){
        return Atendimento.findAll()
    }

    async AddAtendimento(data, hora, valor, concluido, cachorro_id){
        return Atendimento.create({
            data: data,
            hora: hora,
            valor: valor,
            concluido: concluido,
            cachorro_id: cachorro_id
        })
    }

    async UpdateAtendimento(atendimento_id, data, hora, valor, concluido, cachorro_id){
        Atendimento.update({
            data: data,
            hora: hora,
            valor: valor,
            concluido: concluido,
            cachorro_id: cachorro_id
        },{
            where: { atendimento_id }
        })

        return ({message: `Atendimento ${atendimento_id} atualizado com sucesso!`})
    }

    async DeleteAtendimento(atendimento_id){
        Atendimento.destroy({
            where: { atendimento_id }
        })

        return ({message: `Atendimento ${atendimento_id} deletado com sucesso!`})
    }
}

module.exports = RepositorieAtendimento