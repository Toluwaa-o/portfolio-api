const Portfolio = require('../models/portfolio')

const getPortfolio = async (req, res) => {
<<<<<<< HEAD
    const { limit } = req.query

    let portfolio

    if(limit){
        portfolio = await Portfolio.find({}).select('-_id -__v -description -mobileView -link').limit(limit)
        return res.status(200).json({ portfolio })
    }
    
    portfolio = await Portfolio.find({}).select('-_id -__v -description -mobileView -link')
=======
    const portfolio = await Portfolio.find({}).select('-__v -description -mobileView -link')
>>>>>>> 57caa44b23e0d91ca7f80abc739398b6c78a083c
    res.status(200).json({ portfolio })
}

const getSingle = async (req, res) => {
    const portfolio = await Portfolio.findOne({_id: req.params.id}).select('-_id -__v')
    if(portfolio){
        res.status(200).json({ portfolio })
    }
}

module.exports = { getPortfolio, getSingle }
