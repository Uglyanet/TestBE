const Base = require('./Base')
const Sequelize = require('sequelize');
const Actor_Film = require('./Actor_Film')

module.exports = class Actor extends Base {
    static schema = {
        fullname: { type: Sequelize.STRING }
    };

    static initRelationsAndHooks(sequeleze) {
        const { Film } = sequeleze.models
        Actor.belongsToMany(Film, { through: Actor_Film });
    }
}