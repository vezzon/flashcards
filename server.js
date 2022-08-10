const express = require('express')
// const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/cards.js')

// TODO add proper logger middleware

const app = express()

app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use('/cards', router)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cors({ origin: "*" }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000)
