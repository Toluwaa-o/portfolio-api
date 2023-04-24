const Portfolio = require('../models/portfolio')

const getPortfolio = async (req, res) => {
    const portfolio = await Portfolio.find({}).select('-__v -description -mobileView -link')
    res.status(200).json({ portfolio })
}

const getSingle = async (req, res) => {
    const portfolio = await Portfolio.findOne({_id: req.params.id}).select('-_id -__v')
    if(portfolio){
        res.status(200).json({ portfolio })
    }
}

module.exports = { getPortfolio, getSingle }
