const express = require('express');
const cardsController = require('../controllers/cardsController');
const { authorization } = require('../middleware/authorization');

const router = express.Router();

router.use(authorization);

router.get('/:id', cardsController.getOneCard);
router.get('/', cardsController.getAllCards);
router.get('/users/:user_id', cardsController.getAllCardsByUser);
router.post('/', cardsController.createCard);
router.delete('/:id', cardsController.deleteCard);

module.exports = router;
