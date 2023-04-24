const Message = require('../models/message')
const CustomError = require('../errors')

const sendMessage = async (req, res) => {
    const { name, email, message } = req.body

    if(!name || !email || !message) {
        throw new CustomError.BadRequestError('Please provide all required fields')
    }

    const msg = await Message.create({ name, email, message })
    res.status(201).json({ success: true })
}

module.exports = sendMessage