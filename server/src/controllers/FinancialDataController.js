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
  },
  async post (req, res) {
    try {
      const findata = req.body.params.financialdata
      const userId = req.body.params.financialdata.UserId

      // find the fin data based on the UserId
      await FinancialData.update(
        {
          netpaycheck: findata.netpaycheck,
          netpaymonth: findata.netpaymonth,
          netspendingmonth: findata.netspendingmonth,
          monthlybudget: findata.monthlybudget,
          monthlysavings: findata.monthlysavings,
          rent: findata.rent,
          electricity: findata.electricity,
          autoloan: findata.autoloan,
          autoinsurance: findata.autoinsurance,
          studentloan: findata.studentloan,
          gym: findata.gym,
          phonepayment: findata.phonepayment
        },
        { where: {
          UserId: userId
        } }
      )
      res.send(findata)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update Financial Data'
      })
    }
  }
}
