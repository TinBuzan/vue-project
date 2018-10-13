// imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

var app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// syncs sequlaize to which ever working relation database you are using, then runs server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8080)
  console.log(`Server started on port ${config.port}`)
})
