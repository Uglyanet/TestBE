const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Film = require('../../models/Film')
const Actor = require('../../models/Actor')

module.exports = async (req, res) => {
    const { limit = 100, offset = 0, search = '', type = 'FILM' } = req.query

    const films = type === 'FILM' ?
        await getFilms({ limit, offset, search })
        :
        await getFilmsByActor({ limit, offset, search })
    res.send(films)
}

async function getFilms({ limit, offset, search }) {
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
            name: {
                [Op.substring]: search
            }
        }
    })

    return films
}

async function getFilmsByActor({ limit, offset, search }) {
    const films = await Film.findAll({
        limit: Number(limit),
        offset: Number(offset),
        include: [
            {
                model: Actor,
                as: 'actors',
                where: {
                    fullname: {
                        [Op.substring]: search
                    }
                }
            }
        ]
    })

    return films
}