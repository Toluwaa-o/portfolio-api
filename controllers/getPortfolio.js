const Portfolio = require('../models/portfolio')

const getPortfolio = async (req, res) => {
    const { limit, page } = req.query

    let portfolio
    let myLimit = limit || 5
    let myPage = page || 1
    let skip = (myPage - 1) * myLimit

    portfolio = await Portfolio.find({}).select('-__v -mobileView').skip(skip).limit(myLimit)
    let total = await Portfolio.countDocuments({})
    let numOfPages = Math.ceil(total/myLimit)
    res.status(200).json({ portfolio, numOfPages })
}

const getSingle = async (req, res) => {
    const portfolio = await Portfolio.findOne({_id: req.params.id}).select('-_id -__v')
    if(portfolio){
        res.status(200).json({ portfolio })
    }
}

module.exports = { getPortfolio, getSingle }
