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
      storage: './fintracker.sqlite',
      operatorsAliases: false
    }
  }
}
