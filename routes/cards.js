const express = require('express');
const cardsController = require('../controllers/cardsController');
const { authorization } = require('../auth/tokenHandler');

const router = express.Router();

router.get('/:id', authorization, cardsController.get_one_card);
router.get('/', authorization, cardsController.get_all_cards);
router.post('/', authorization, cardsController.create_card);
router.delete('/:id', authorization, cardsController.delete_card);

module.exports = router;
