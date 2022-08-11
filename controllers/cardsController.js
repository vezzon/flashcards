const mysql2 = require('mysql2')
require('dotenv').config()

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME,
})

const get_one_card = (req, res) => {
  connection.query(
    'SELECT * FROM `cards` WHERE `Id` = ?',
    [req.params.id],
    (err, results) => {
      console.log(results);
      res.json(results[0])
    }
  )
}

const get_all_cards = (req, res) => {
  connection.query(
    'SELECT * FROM cards',
    [req.params.Id],
    (err, results) => {
      console.log(results);
      res.json(results)
    }
  )
}

const create_card = (req, res) => {
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
}

const delete_card = (req, res) => {
  connection.query(
    'DELETE FROM cards WHERE Id = ?',
    [req.params.id],
    (err, results) => {
      if (err) console.log(err)
      console.log(results)
    }
  )
  res.json({message: 'Deleted'})
}
module.exports = {
    get_one_card,
    get_all_cards,
    create_card,
    delete_card
}