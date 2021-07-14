const Film = require('../../models/Film')

module.exports = async (req, res) => {
    const { params, body } = req
    const film = await Film.update(body, {
        where: {
            id: params.id
        }
    })
    res.send(film)
}