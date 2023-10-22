const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Atendimento = sequelize.define('atendimentos', {
    atendimento_id : {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    data : {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    hora : {
        type: DataTypes.TIME,
        allowNull: false
    },

    valor : {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    concluido : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    cachorro_id : {
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'cachorros',
            key: 'cachorro_id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Atendimento;