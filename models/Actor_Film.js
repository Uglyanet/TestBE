const Base = require('./Base')
const Sequelize = require('sequelize');

module.exports = class Actor_Film extends Base {
    static schema = {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        actorId: { type: Sequelize.UUID },
        filmId: { type: Sequelize.UUID }
    };

    static options = {
        tableName: 'actors_films',
        timestamps: false
    }

    static initRelationsAndHooks(sequeleze) { }
}