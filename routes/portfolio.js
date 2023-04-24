const express = require('express')
const router = express.Router()

const { getPortfolio, getSingle } = require('../controllers/getPortfolio')

router.get('/', getPortfolio)
router.get('/:id', getSingle)

module.exports = router