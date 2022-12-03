const { Schema, model } = require('mongoose')

const LoginUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const loginUser = new model('Signin', LoginUserSchema)

module.exports = loginUser
