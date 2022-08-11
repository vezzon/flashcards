const express = require('express')
const morgan = require('morgan')
const router = require('./routes/cards.js')
const app = express()


app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use('/cards', router)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000)
