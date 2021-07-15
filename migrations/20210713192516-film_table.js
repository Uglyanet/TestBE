'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable(
      'films',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        name: Sequelize.STRING,
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      }
    )
  },

  down: async (queryInterface) => {
     await queryInterface.dropTable('films');
  }
};
