const Sequelize = require('sequelize')

module.exports = new Sequelize('testfilms', 'root', '', {
    host: 'localhost',
    port:'3306',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });