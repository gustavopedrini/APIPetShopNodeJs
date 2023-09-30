const sequelize = require('../database')
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    createdAt: false,
    updatedAt: false
}) // VAI DEFINIR UMA TABELA PARA ESSA CLASSE

module.exports = Cliente