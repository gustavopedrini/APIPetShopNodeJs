const express = require('express')
const routeAtendimento = require('./src/routes/atendimento')
const routeCachorro = require('./src/routes/cachorro')
const routeCliente = require('./src/routes/cliente')
const routeFuncionario = require('./src/routes/funcionario')
const routeLogin = require('./src/routes/login')

const app = express()
const port = 3000

app.use(express.json())
app.use(routeAtendimento, routeCachorro, routeCliente, routeFuncionario, routeLogin)

app.listen(port, () => {
    console.log(`>>> Servidor rodando na porta ${port} <<<`)
})