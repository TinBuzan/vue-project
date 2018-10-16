const path = require('path')

module.exports = {
  // port config
  port: process.env.PORT || 8081,
  // databse config
  db: {
    database: process.env.DB_NAME || 'fintracker',
    user: process.env.DB_USER || 'fintracker',
    password: process.env.DB_PASS || 'fintracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DIALECT || 'localhost',
      storage: path.resolve(__dirname, '../../fintracker.sqlite'),
      operatorsAliases: false
    }
  },
  // Validates JWT token is valid
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
