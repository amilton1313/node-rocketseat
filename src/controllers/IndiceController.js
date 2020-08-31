const Indice = require('../models/Indice')

module.exports = {

    async store(req, res) {

        const { descricao } = req.body

        const indice = await Indice.create({
            descricao
        })
        return res.json(indice)
    },

    async index(req, res) {

        const indices = await Indice.findAll()
        return res.json(indices)
    }
}