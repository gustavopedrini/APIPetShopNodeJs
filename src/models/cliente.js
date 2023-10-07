const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Cachorro = require('./cachorro');

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
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Cachorro, { foreignKey: 'cliente_id' });

module.exports = Cliente;