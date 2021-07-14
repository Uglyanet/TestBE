const Sequelize = require('sequelize')

module.exports = new Sequelize('testfilms', 'root', 'Maximilian99', {
    host: 'localhost',
    port:'3309',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });