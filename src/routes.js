const express = require('express')
const UsuarioController = require('./controllers/UsuarioController')
const EnderecoController = require('./controllers/EnderecoController')
const IndiceController = require('./controllers/IndiceController')
const IndiceDataController = require('./controllers/IndiceDataController')

const routes = express.Router()


routes.post('/usuarios', UsuarioController.store)
routes.get('/usuarios', UsuarioController.index)

routes.post('/usuarios/:usuario_id/enderecos', EnderecoController.store)
routes.get('/usuarios/:usuario_id/enderecos', EnderecoController.index)

routes.post('/indices', IndiceController.store)
routes.get('/indices', IndiceController.index)

routes.post('/indices/:indice_id/datas', IndiceDataController.store)
routes.get('/indices/:indice_id/datas', IndiceDataController.index)

module.exports = routes