const express = require('express')
const router = express.Router()

const product = require('../controllers/productController')

//get the product post page
router.get('/', product.render_form)

//post a new product
router.post('/', product.post_a_product)

//get all products of a particular category
router.get('/:categoryId', product.get_all_products_categoryWise)

//get all products of a particular category and type
router.get('/:categoryId/:typeId', product.get_all_products_typeWise)

//get a product
router.get('/:categoryId/:typeId/:productId', product.get_a_product)


module.exports = router