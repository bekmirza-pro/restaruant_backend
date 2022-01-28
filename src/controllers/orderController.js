const { Orders } = require('../models/models')
const ApiError = require('../error/ApiError');

class OrderController {
    async create(req, res) {
        const { type, restaruant, food, count, address, tell } = req.body
        const order = await Orders.create({ type, restaruant, food, count, address, tell })
        return res.json(order)
    }

    async getAll(req, res) {
        const orders = await Orders.findAll()
        return res.json(orders)
    }

}

module.exports = new OrderController()