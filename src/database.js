const { Sequelize } = require('sequelize')
const { development } = require('./config')

const sequelize = new Sequelize(development)
sequelize.sync()
    .then(() => {
        console.log('O banco de dados foi conectado com sucesso')
    }) // CASO DÊ CERTO

    .catch((error) => {
        console.log('O banco de dados não foi conectado', error)
    }) // CASO DÊ ERRADO

module.exports = sequelize