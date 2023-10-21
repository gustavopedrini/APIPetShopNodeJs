const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
    usuario_id: {
        field: 'usuario_id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nivel_permissao: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Usuario;