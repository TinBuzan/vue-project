const { FinancialData } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { userId } = req.query
      // find the fin data based on the UserId
      const financialdata = await FinancialData.findOne({
        where: {
          UserId: userId
        }
      })
      res.send(financialdata)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the user\'s financial databse'
      })
    }
  }
  // async post (req, res) {
  //   try {
  //     const financialdata = req.query
  //     // find the fin data based on the UserId
  //     await FinancialData.create(financialdata)
  //     res.send(financialdata)
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'An error has occured trying to create Financial Data'
  //     })
  //   }
  // }
}
