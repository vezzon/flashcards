import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'

const app = express()
const port = 3000
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'flashcards'
})


app.use(logger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
  origin: "*"
}))

app.get('/:Id', (req, res) => {
  connection.query(
    'SELECT * FROM `cards` WHERE `Id` = ?',
    [req.params.Id],
    (err, results) => {
      console.log(results);
      res.json(results[0])
    }
  )
})

app.post('/card', (req, res) => {
  console.log(req.body)
  connection.query(
    'INSERT INTO cards (Eng,Pl) VALUES (?, ?)',
    [req.body.Eng, req.body.Pl],
    (err, results) => {
      if (err) console.log(err)
      console.log(results);
    }
  )
  res.send('Post made')
})

app.listen(port, () => {
  console.log(`Express webserver listening on port ${port}`)
})


function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}
