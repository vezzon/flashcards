const connection = require('../configs/database')


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
    [],
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

const get_cars_learn = (req, res) => {
  res.render('learn')
}

module.exports = {
    get_one_card,
    get_all_cards,
    create_card,
    delete_card,
    get_cars_learn
}