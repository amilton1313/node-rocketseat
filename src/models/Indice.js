const { Model, DataTypes } = require('sequelize')

class Indice extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize    
        })
    }

    static associate(models) {
        this.hasMany(models.Indice_Data, { foreignKey: 'Indice_id', as: 'Indices' })
    }

}

module.exports = Indice