const express = require('express')
const router = express.Router()

const category = require('../controllers/categoryController')

//get all categories
router.get('/all', category.get_all_categories)

//get a category
router.get('/:categoryId', category.get_a_category)

//post a new category
router.post('/', category.post_a_category)

//delete a category
router.delete('/:categoryId/:nameId', category.delete_a_category)

module.exports = router