const Sequelize = require('sequelize')

module.exports = class Base extends Sequelize.Model {
    static init(sequelize) {
        super.init(this.schema, { sequelize, ...(this.options || {}) })
    }
}