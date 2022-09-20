const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')

const API = require('./config.js')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

mongoose.connect(API, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('db is connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('lol')
})

app.get('/user', (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(err => console.error(err))
})

app.post('/user', (req, res) => {
  console.log(req)
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    passwordHash: req.body.password
  })

  newUser.save()
    .then(users => res.send(users))
    .catch(err => console.error(err))
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
