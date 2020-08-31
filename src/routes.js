const express = require('express')
const UsuarioController = require('./controllers/UsuarioController')
const EnderecoController = require('./controllers/EnderecoController')

const routes = express.Router()


routes.post('/usuarios', UsuarioController.store)
routes.get('/usuarios', UsuarioController.index)

routes.post('/usuarios/:usuario_id/enderecos', EnderecoController.store)
routes.get('/usuarios/:usuario_id/enderecos', EnderecoController.index)

module.exports = routes