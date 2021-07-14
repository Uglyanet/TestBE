const Film = require('../../models/Film')

module.exports = async (req, res) => {
    const { params } = req
    await Film.destroy({ where: { id: params.id } })
    res.send({ status: '1' })
}