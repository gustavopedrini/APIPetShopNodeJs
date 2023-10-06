const Cliente = require('./cliente');
const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Cachorro = sequelize.define('cachorros', {
    cachorro_id: {
        field: 'cachorro_id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cliente_id: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'cliente_id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

Cachorro.belongsTo(Cliente, { foreignKey: 'cliente_id'})

module.exports = Cachorro;