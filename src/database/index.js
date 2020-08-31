const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Usuario = require('../models/Usuario')
const Endereco = require('../models/Endereco')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Endereco.init(connection)

Usuario.associate(connection.models)
Endereco.associate(connection.models)

module.exports = connection