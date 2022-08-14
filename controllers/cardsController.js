const cardsService = require('../services/cardService')


const get_one_card = async (req, res) => {
  const card = await cardsService.getCardById(req.params.id)
  res.json(card)
}

const get_all_cards = async (req, res) => {
  const cards = await cardsService.getAllCards()
  res.json(cards)
}

const create_card = async (req, res) => {
  await cardsService.createCard(req.body.Eng, req.body.Pl)
  res.send(req.body)
}

const delete_card = async (req, res) => {
  await cardsService.deleteCard(req.params.id)
  res.status(204).json({message: 'Deleted'})
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