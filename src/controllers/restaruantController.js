const { Restaruant } = require('../models/models')
const ApiError = require('../error/ApiError');

class RestaruantController {
    async create(req, res) {
        const { name } = req.body
        const restaruant = await Restaruant.create({ name })
        return res.json(restaruant)
    }

    async getAll(req, res) {
        const restaruants = await Restaruant.findAll()
        return res.json(restaruants)
    }

}

module.exports = new RestaruantController()