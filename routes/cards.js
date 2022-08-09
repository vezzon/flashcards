const express = require('express')
const mysql2 = require('mysql2')
require('dotenv').config()

const router = express.Router()


const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME,
})

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// GET ONE
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM `cards` WHERE `Id` = ?',
    [req.params.id],
    (err, results) => {
      console.log(results);
      res.json(results[0])
    }
  )
})


// GET ALL
router.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM cards',
    [req.params.Id],
    (err, results) => {
      console.log(results);
      res.json(results)
    }
  )
})


// CREATE
router.post('/', (req, res) => {
  connection.query(
    'INSERT INTO cards (Eng,Pl) VALUES (?, ?)',
    [req.body.Eng, req.body.Pl],
    (err, results) => {
      if (err) console.log(err)
      console.log(results);
      console.log(req.body)
    }
  )
  res.send(req.body)
})

// UPDATE
router.patch('/:id', (req, res) => {

})

// DELETE
router.delete('/:id', (req, res) => {
  connection.query(
    'DELETE FROM cards WHERE Id = ?',
    [req.params.id],
    (err, results) => {
      if (err) console.log(err)
      console.log(results)
    }
  )
  res.json({message: 'Deleted'})
})

module.exports = router