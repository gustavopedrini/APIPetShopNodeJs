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

    async AddAtendimento(data, hora, concluido, cachorro_id){
        return Atendimento.create({
            data: data,
            hora: hora,
            concluido: concluido,
            cachorro_id: cachorro_id
        })
    }

    async UpdateAtendimento(atendimento_id, data, hora, concluido, cachorro_id){
        return Atendimento.update({
            data: data,
            hora: hora,
            concluido: concluido,
            cachorro_id: cachorro_id
        },{
            where: { atendimento_id }
        })
    }

    async DeleteAtendimento(atendimento_id){
        return Atendimento.destroy({
            where: { atendimento_id }
        })
    }
}

module.exports = RepositorieAtendimento