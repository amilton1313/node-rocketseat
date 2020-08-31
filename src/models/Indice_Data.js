const { Model, DataTypes } = require('sequelize')

class Indice_Data extends Model {
    static init(sequelize) {
        super.init({

            data: DataTypes.DATE,
            valor: DataTypes.FLOAT

        }, {
            sequelize,
            tableName: 'indices_datas'    
        })
    }

    static associate(models) {
        this.belongsTo(models.Indice, { foreignKey: 'indice_id', as: 'Indices_Datas' })
    }

}

module.exports = Indice_Data