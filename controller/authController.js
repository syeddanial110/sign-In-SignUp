const mongoose = require('mongoose')
const SignUpUser = require('../models/createUserModel')

exports.createUser = async (req, res) => {
  try {
    const { name, password, confirmPassword, email } = req.body

    if (password === confirmPassword) {
      const matchEmail = await SignUpUser.find({ email: email })
      console.log('matchEmail', matchEmail)
      if (matchEmail.length > 0) {
        res.status(201).json({
          status: 'error',
          msg: 'this email already exist',
        })
      } else {
        const data = await SignUpUser.create(req.body)
        console.log(data)
        res.setHeader('content-type', 'application/json')
        res.status(201).json({
          status: 'success',
          msg: 'You are registerd successfully',
          // data: { data },
        })
      }
    } else {
      res.status(501).json({
        status: 'error',
        msg: 'password not matched',
      })
      console.log(error.message)
    }
  } catch (error) {
    res.status(404).json({
      status: 'error',
      msg: 'error occured',
    })
    console.log(error.message)
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { name, password, confirmPassword, email } = req.body

    const matchEmail = await SignUpUser.find({
      email: email,
      password: password,
    })
    if (matchEmail.length > 0) {
      res.status(201).json({
        status: 'success',
        msg: 'You are successfully login',
        // data: { data },
      })
    } else {
      res.status(201).json({
        status: 'error',
        msg: 'Invalid email or password',
      })
    }
    console.log('matchEmail', matchEmail)
  } catch (error) {
    res.status(404).json({
      status: 'error',
      msg: 'error occured',
    })
    console.log(error.message)
  }
}
