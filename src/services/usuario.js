const RepositorieUsuario = require('../repositories/usuario');
const usuario = new RepositorieUsuario();

class ServiceUsuario{

    async GetUsuario(usuario_id, transaction){
        if(isNaN(usuario_id)){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.GetUsuario(usuario_id, transaction);
    }

    async GetUsuarioPorEmail(email){
        if(!email){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.GetUsuarioPorEmail(email);
    }

    async GetUsuarios(){
        return usuario.GetUsuarios()
    }

    async AddUsuario(email, senha){
        return usuario.AddUsuario(email, senha)
    }

    async UpdateUsuario(id, email, senha){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.UpdateUsuario(id, email, senha);
    }

    async DeleteUsuario(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.DeleteUsuario(id);
    }
}

module.exports = ServiceUsuario