const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const userRoute = require('./routes/userRoute')

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Successfully connected with mongoose')
  })
  .catch((error) => {
    console.log('Mongoose connection error', error)
  })

app.use(express.json())
app.use(cors())

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
  res.send('Hello word')
})

app.listen(port, () => {
  console.log(`Server is successfully running at http://localhost:${port}`)
})
