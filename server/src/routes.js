const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const FinancialDataController = require('./controllers/FinancialDataController')
// Hits endspoint and envokes all middleware we have defined @ '/register'
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  // get dummy sql databse
  app.get('/financialdata',
    FinancialDataController.index)
  // app.post('/financialdata',
  //   FinancialDataController.post)
}
