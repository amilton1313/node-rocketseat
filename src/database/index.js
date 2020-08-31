const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Usuario = require('../models/Usuario')
const Endereco = require('../models/Endereco')
const Indice = require('../models/Indice')
const Indice_Data = require('../models/Indice_Data')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Endereco.init(connection)

Indice.init(connection)
Indice_Data.init(connection)

Usuario.associate(connection.models)
Endereco.associate(connection.models)

Indice.associate(connection.models)
Indice_Data.associate(connection.models)

module.exports = connection