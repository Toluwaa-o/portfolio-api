require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connectDB')

const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

const msgRoute = require('./routes/message')
const portRoute = require('./routes/portfolio')

const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

app.use(fileUpload({useTempFiles: true}))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

app.use('/portfolio', portRoute)
app.use(msgRoute)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    }catch(error) {
        console.log(error)
    }
}

start()