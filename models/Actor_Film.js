const Base = require('./Base')
const Sequelize = require('sequelize');

module.exports = class Actor_Film extends Base {
    static schema = {
        actorId: { type: Sequelize.UUID },
        filmId: { type: Sequelize.UUID }
    };

    static options = {
        tableName: 'actors_films',
        timestamps: false
    }

    static initRelationsAndHooks(sequeleze) { }
}