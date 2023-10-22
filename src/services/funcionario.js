const RepositorieFuncionario = require('../repositories/funcionario');
const funcionario = new RepositorieFuncionario();

class ServiceFuncionario{

    async GetFuncionario(usuario_id, transaction){
        if(isNaN(usuario_id)){
            throw new Error("Parâmetro Inválido!");
        }
        return funcionario.GetFuncionario(usuario_id, transaction);
    }

    async GetFuncionarioPorEmail(email){
        if(!email){
            throw new Error("Parâmetro Inválido!");
        }
        return funcionario.GetFuncionarioPorEmail(email);
    }

    async GetFuncionarios(){
        return funcionario.GetFuncionarios()
    }

    async AddFuncionario(email, senha){
        if(!email || !senha){
            throw new Error("Parâmetros Inválidos!");
        }

        return funcionario.AddFuncionario(email, senha)
    }

    async UpdateFuncionario(id, email, senha){
        if(isNaN(id) || !email || !senha){
            throw new Error("Parâmetros Inválido!");
        }
        return funcionario.UpdateFuncionario(id, email, senha);
    }

    async DeleteFuncionario(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!");
        }
        return funcionario.DeleteFuncionario(id);
    }
}

module.exports = ServiceFuncionario