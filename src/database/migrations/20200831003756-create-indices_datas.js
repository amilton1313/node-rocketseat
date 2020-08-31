'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('indices_datas', 
    { 
      indice_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'indices', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },
      data: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.DATE
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      } 

     })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('indices_datas')
  }
};
