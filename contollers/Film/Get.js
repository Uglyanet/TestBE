const Film = require('../../models/Film')

module.exports = async (req, res) => {
    const { params } = req
    const film = await Film.findByPk(params.id)
    res.send(film)
}