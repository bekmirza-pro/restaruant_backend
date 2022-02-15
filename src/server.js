require('dotenv').config()
const express = require('express')
const sequelize = require('../lib/db')
const models = require('./models/models')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const router = require('./routes/index')
const path = require('path')


app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ force: false })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()