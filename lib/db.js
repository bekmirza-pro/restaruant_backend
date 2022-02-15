const { Sequelize } = require('sequelize')

module.exports = new Sequelize('postgres://postgres:1111@localhost:5432/defoult_db')