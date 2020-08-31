'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'usuarios',
      'age',
      {
        type: Sequelize.INTEGER
      }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'usuarios',
      'age'
      )
  }
};
