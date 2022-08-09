const express = require('express')
const cors = require('cors')
const router = require('./routes/cards.js')

// console.log(process.env) 

const app = express()
const port = 3000

app.use(logger)

app.use('/cards', router)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
  origin: "*"
}))

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: '/Users/mateuszmajewski/Projects/Flashcards/' })
})


app.listen(port, () => {
  console.log(`Express webserver listening on port ${port}`)
})


function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}
