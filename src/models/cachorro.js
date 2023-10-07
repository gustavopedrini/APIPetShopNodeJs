const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Atendimento = require('./atendimento');

const Cachorro = sequelize.define('cachorros', {
    cachorro_id: {
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
            model: 'clientes',
            key: 'cliente_id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

Atendimento.belongsTo(Cachorro, { foreignKey: 'cachorro_id' })
Cachorro.hasMany(Atendimento, { foreignKey: 'cachorro_id' });

module.exports = Cachorro;