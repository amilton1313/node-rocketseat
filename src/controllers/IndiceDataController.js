const Indice = require('../models/Indice')
const Indice_Data = require('../models/Indice_Data')

module.exports = {

    async store(req, res) {

        const { indice_id } = req.params
        const { valor } = req.body

        const indice = await Indice.findByPk(indice_id)

        if (!indice) {
            return res.status(400).json({error: 'Usuário não encontrado'})
        }

        const data = await Indice_Data.create({
            indice_id,
            valor
        })
        return res.json(data)
    },

    async index(req, res) {

        const id = req.params.indice_id

        const resposta = await Indice.findByPk(id, {
            include: { association: 'Indices'}
        })

        return res.json(resposta.Indices)
    }
}