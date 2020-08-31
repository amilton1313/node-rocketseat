const { Model, DataTypes } = require('sequelize')

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING    
        }, {
            sequelize    
        })
    }

    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'usuario_id', as: 'Enderecos' })
    }

}

module.exports = Usuario