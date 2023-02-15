const express = require('express')
const router = express.Router()

const product = require('../controllers/productController')

//get all categories
router.get('/category/all', product.get_all_categories)

//get all products of a particular category and name
router.get('/:category/:name', product.get_all_products)

//get a product
router.get('/:category/:name/:productId', product.get_a_product)

//post a new product
router.post('/:category/:name', product.post_a_product)

module.exports = router