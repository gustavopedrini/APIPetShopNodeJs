const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Cachorro = require('./cachorro');
const Usuario = require ('./usuario')

const Cliente = sequelize.define('clientes', {
    cliente_id: {
        field: 'cliente_id',
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
    },

    usuario_id: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'usuario_id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Cachorro, { foreignKey: 'cliente_id' });

module.exports = Cliente;