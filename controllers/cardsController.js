const cardsService = require('../services/cardService');

const get_one_card = async (req, res) => {
  try {
    const card = await cardsService.getCardById(req.params.id);
    if (card) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.set('Access-Control-Allow-Credentials', 'true');
      res.status(200).json(card);
    } else {
      res.status(404).json({
        success: 1,
        message: 'Card not found',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const get_all_cards = async (req, res) => {
  try {
    const cards = await cardsService.getAllCards();
    res.json(cards);
  } catch (error) {
    console.log(error);
  }
};

const getAllCardsByUser = async (req, res) => {
  try {
    const cards = await cardsService.getAllCardsByUser(req.params.user_id);
    res.json(cards);
  } catch (error) {
    console.log(error);
  }
};

const create_card = async (req, res) => {
  try {
    await cardsService.createCard(
      req.body.front,
      req.body.back,
      req.body.user_id
    );
    res.status(201).send(req.body);
  } catch (error) {
    console.log(error);
  }
};

const delete_card = async (req, res) => {
  try {
    const id = req.params.id;
    const card = await cardsService.getCardById(id);
    if (card) {
      await cardsService.deleteCard(id);
      res.status(204).json({
        success: 1,
        message: 'Card deleted',
      });
    } else {
      res.status(404).json({
        success: 0,
        message: 'Not found',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  get_one_card,
  get_all_cards,
  getAllCardsByUser,
  create_card,
  delete_card,
};
