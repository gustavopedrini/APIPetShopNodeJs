const Usuario = require('../models/usuario')

class RepositorieUsuario{
    async GetLoginPorEmail(email){
        return Usuario.findOne({
            where: { email }
        })
    }
}

module.exports = RepositorieUsuario