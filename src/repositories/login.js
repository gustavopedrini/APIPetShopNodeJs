const Usuario = require('../models/usuario')

class RepositorieLogin{
    async GetLoginPorEmail(email){
        return Usuario.findOne({
            where: { email }
        })
    }
}

module.exports = RepositorieLogin