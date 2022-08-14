const express = require('express')
const cardsController = require('../controllers/cardsController')

const router = express.Router()

// router.use(express.json())
// router.use(express.urlencoded({ extended: true }))

router.get('/learn', cardsController.get_cars_learn)
router.get('/:id', cardsController.get_one_card)
router.get('/', cardsController.get_all_cards)
router.post('/', cardsController.create_card)
router.delete('/:id', cardsController.delete_card)


module.exports = router