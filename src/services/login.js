const RepositorieLogin = require('../repositories/login');
const login = new RepositorieLogin();

class ServiceLogin{
    async GetLoginPorEmail(email){
        if(!email){
            throw new Error("Parâmetro Inválido!");
        }
        return login.GetLoginPorEmail(email);
    }
}

module.exports = ServiceLogin