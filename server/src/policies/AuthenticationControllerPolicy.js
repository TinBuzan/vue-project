const Joi = require('Joi')

module.exports = {
  // express middleware
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        // password must be 8-32 characters long and any letter or number combo
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    // evaluate request body against our schema
    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `
              1. Password must contain ONLY the following characters: lower case, upper case, numerics
              <br>
              2. Password must be at least 8 characters in length and no greater than 32 characters in length
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
          break
      }
    } else {
      // envoke next method in routes path
      console.log(value)
      next()
    }
  }
}
