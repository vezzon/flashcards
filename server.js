const express = require('express')
const morgan = require('morgan')
const cardsRouter = require('./routes/cards.js')
const authRouter = require('./routes/auth.js')
const cookieParser = require('cookie-parser')

const app = express()


app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/cards', cardsRouter)
app.use(authRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000)
