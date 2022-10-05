const { Card } = require('../models');

const getCardById = async id => {
  try {
    const card = await Card.findOne({ where: { id } });
    return card;
  } catch (error) {
    console.log(error);
  }
};

const getAllCards = async () => {
  try {
    const cards = await Card.findAll();
    return cards;
  } catch (error) {
    console.log(error);
  }
};

const getAllCardsByUser = async user_id => {
  try {
    const cards = await Card.findAll({ where: { user_id } });
    return cards;
  } catch (error) {
    console.log(error);
  }
};

const createCard = async (front, back, user_id) => {
  try {
    await Card.create({ front, back, user_id });
  } catch (error) {
    console.log(error);
  }
};

const deleteCard = async id => {
  try {
    await Card.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCardById,
  getAllCards,
  getAllCardsByUser,
  createCard,
  deleteCard,
};
