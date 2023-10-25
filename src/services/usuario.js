const RepositorieUsuario = require('../repositories/usuario');
const login = new RepositorieUsuario();

class ServiceUsuario{
    async GetLoginPorEmail(email){
        if(!email){
            throw new Error("Parâmetro Inválido!");
        }
        return login.GetLoginPorEmail(email);
    }
}

module.exports = ServiceUsuario