const Product = require('../models/productModel')

exports.get_all_categories = async function(req,res){
    try{
        const categories = await Product.find({}, "category name").sort({category: -1})
        return res.status(200).render('index', {
            title: 'Add',
            categories,
        })
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get all products of a particular category and name
exports.get_all_products = async function(req,res){
    try{
        const {category, name} = req.params

        const products = await Product.find({category, name, stock: {$gte: 1}}, "description mrp discount rating").sort({createdAt: -1})

        res.status(200).json({products})

    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get a particular product
exports.get_a_product = async function(req,res){
    try{
        const {category, name, productId} = req.params
        
        const product = await Product.find({category, name, _id: productId})
        
        if(!product){
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        res.status(200).json({product})

    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//post a product
exports.post_a_product = async function(req,res){
    try{
        const {category, name} = req.params
        const product = await Product.create({category, name, ...req.body})
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}