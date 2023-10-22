const jwt = require('jsonwebtoken');
const config = require('../config');

function authMiddleware(req, res, next){
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        console.log(err)
        if(err){
            return res.status(401).json({message: 'Token inválido'});
        }

        req.session = decoded;
        next();
    });
}

function authAdm(req, res, next){
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        console.log(err)
        if(err){
            return res.status(401).json({message: 'Token inválido'});
        }

        if(decoded.nivel_permissao !== 0){
            return res.status(401).json({message: 'Acesso negado'});
        }

        req.session = decoded;

        next();
    });
}

function authCliente(req, res, next){
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        console.log(err)
        if(err){
            return res.status(401).json({message: 'Token inválido'});
        }

        if(decoded.nivel_permissao !== 1){
            return res.status(401).json({message: 'Acesso negado'});
        }

        req.session = decoded;

        next();
    });
}

function authFuncionario(req, res, next){
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        console.log(err)
        if(err){
            return res.status(401).json({message: 'Token inválido'});
        }

        if(decoded.nivel_permissao !== 2){
            return res.status(401).json({message: 'Acesso negado'});
        }

        req.session = decoded;

        next();
    });
}

module.exports = { authMiddleware, authAdm, authCliente, authFuncionario };