const Usuario = require('../models/Usuario')
const Endereco = require('../models/Endereco')

module.exports = {

    async store(req, res) {

        const { usuario_id } = req.params
        const { logradouro, numero, cep } = req.body

        const usuario = await Usuario.findByPk(usuario_id)

        if (!usuario) {
            return res.status(400).json({error: 'Usuário não encontrado'})
        }

        const endereco = await Endereco.create({
            usuario_id,
            logradouro,
            numero,
            cep,
        })
        return res.json(endereco)
    },

    async index(req, res) {

        const { usuario_id } = req.params

        const resposta = await Usuario.findByPk(usuario_id, {
            include: { association: 'Enderecos'}
        })

        return res.json(resposta.Enderecos)
    }
}