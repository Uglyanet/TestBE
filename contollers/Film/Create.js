const Film = require('../../models/Film')
const Actor = require('../../models/Actor')

module.exports = async (req, res) => {
    const { body } = req
    const { actors, ...film } = body
    const createdFilm = await Film.create(film)
    const createdActors = await Actor.bulkCreate(actors)
    await createdFilm.addActors(createdActors)
    res.send(createdFilm)
}