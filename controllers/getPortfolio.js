const Portfolio = require('../models/portfolio')

const getPortfolio = async (req, res) => {
    const { limit, page } = req.query

    let portfolio
    let limit = limit || 5
    let page = page || 0
    let skip = (thePage - 1) * limit

    portfolio = await Portfolio.find({}).select('-__v -description -mobileView -link').skip(skip).limit(limit)
    let total = await countDocuments({})
    let numOfPages = Math.celi(total/limit)
    res.status(200).json({ portfolio, numOfPages })
}

const getSingle = async (req, res) => {
    const portfolio = await Portfolio.findOne({_id: req.params.id}).select('-_id -__v')
    if(portfolio){
        res.status(200).json({ portfolio })
    }
}

module.exports = { getPortfolio, getSingle }
