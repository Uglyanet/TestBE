const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Film = require('../../models/Film')

module.exports = async (req, res) => {
    const { limit = 100, offset = 0, search = '' } = req.query
    const films = await Film.findAll({
        limit: Number(limit),
        offset: Number(offset),
        where: {
            name: {
                [Op.like]: `%${search}%`
            }
        }
    })
    res.send(films)
}