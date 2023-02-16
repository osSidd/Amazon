const express = require('express')
const router = express.Router()

const product = require('../controllers/productController')


//post a new product
router.post('/', product.post_a_product)

/*
    

//get all products of a particular category and type
router.get('/:categoryId/:typeId', product.get_all_products)

//get a product of a particular category and type
router.get('/:categoryId/:typeId/:productId', product.get_all_product)

*/

module.exports = router