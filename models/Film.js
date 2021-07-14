const Base = require('./Base')
const Sequelize = require('sequelize');
const Actor_Film = require('./Actor_Film')

module.exports = class Film extends Base {
    static schema = {
        name: { type: Sequelize.STRING }
    };
    static initRelationsAndHooks(sequeleze) {
        const { Actor } = sequeleze.models
        Film.belongsToMany(Actor, { through: Actor_Film });
    }
}