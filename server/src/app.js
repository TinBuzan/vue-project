console.log("Listening...")

//init modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//build up the server
const app = express()
//Format logs in a certain manner
app.use(morgan('combined'))
//Allow our app to easily parse JSON data passed in
app.use(bodyParser.json())
//Server to be hosted on a different domain and can be hit from anywhere
app.use(cors())

/*
* get, post, put, patch, delete - main five endpoint methods
*/
app.get('/status', (req, res) => {
    res.send({
        messaage: 'Status Received.'
    })
})

//Listen for Server running on port:8081
app.listen(process.env.PORT || 8081)