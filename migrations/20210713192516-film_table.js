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
        title: Sequelize.STRING,
        releaseYear: Sequelize.INTEGER,
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
