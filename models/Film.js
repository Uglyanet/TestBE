const Base = require('./Base')
const Sequelize = require('sequelize');
const { Op } = Sequelize
const Actor_Film = require('./Actor_Film')
module.exports = class Film extends Base {
    static schema = {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        releaseYear: { type: Sequelize.INTEGER },
        title: { type: Sequelize.STRING }
    };

    static async getFilmList({ limit, offset, search }) {
        const { Actor } = this.sequelize.models
        const films = await Film.findAll({
            limit: Number(limit),
            offset: Number(offset),
            include: [
                {
                    model: Actor,
                    as: 'actors'
                }
            ],
            where: {
                title: {
                    [Op.substring]: search
                }
            }
        })

        return films
    }

    static initRelationsAndHooks(sequeleze) {
        const { Actor } = sequeleze.models
        Film.belongsToMany(Actor, { through: Actor_Film, as: 'actors' });
    }
}