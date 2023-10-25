const jwt = require('jsonwebtoken');
const config = require('../config');

function authMiddleware(nivel_permissao){ // VAI RECEBER ARRAYS DE PERMISSÃO
    return (req, res, next) => {
        const token = req.headers['authorization'];

        if(!token){
            return res.status(401).json({message: 'Token não fornecido'});
        }

        jwt.verify(token, config.secret, (err, decoded) => {
            console.log(err)
            if(err){
                return res.status(401).json({message: 'Token inválido'});
            }
            
            console.log(decoded)
            console.log(nivel_permissao)
            if(nivel_permissao && !nivel_permissao.includes(decoded.nivel_permissao)){
                return res.status(401).json({message: 'Autorização Negada'})
            }

            req.session = decoded;
            next();
        });
    }
}

module.exports = authMiddleware;