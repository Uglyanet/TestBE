'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('actors_films', {
      id: Sequelize.UUID,
      actorId: Sequelize.UUID,
      filmId: Sequelize.UUID
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('actors_films');
  }
};
