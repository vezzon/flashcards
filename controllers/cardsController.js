const cardsService = require("../services/cardService");

const get_one_card = async (req, res) => {
  const card = await cardsService.getCardById(req.params.id);
  if (card) {
    res.status(200).json(card);
  } else {
    res.status(404).json({
      success: 1,
      message: "Card not found",
    });
  }
};

const get_all_cards = async (req, res) => {
  const cards = await cardsService.getAllCards();
  res.json(cards);
};

const create_card = async (req, res) => {
  await cardsService.createCard(req.body.Eng, req.body.Pl);
  res.status(201).send(req.body);
};

const delete_card = async (req, res) => {
  const id = req.params.id;
  const card = await cardsService.getCardById(id);
  if (card) {
    await cardsService.deleteCard(id);
    res.status(204).json({
      success: 1,
      message: "Card deleted",
    });
  } else {
    res.status(404).json({
      success: 0,
      message: "Not found",
    });
  }
};

module.exports = {
  get_one_card,
  get_all_cards,
  create_card,
  delete_card,
};
