const Product = require('../models/productModel')
const {productField} = require('../models/productDetailsSchema')

//render product form
exports.render_form = (req,res) => {
    res.status(200).json({
        ...productField
    })
}


//post a product
exports.post_a_product = async function(req,res){
    try{
        console.log(req.body)
        const product = await Product.create({...req.body})
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get all products of a particular category
exports.get_all_products_categoryWise = async function(req,res){
    try{
        const {categoryId} = req.params

        const product = await Product.find({
            "categoryType.category": categoryId
        }, "categoryType nameDescription.name price")
       
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get all products of a particular category and type
exports.get_all_products_typeWise = async function(req,res){
    try{
        const {categoryId, typeId} = req.params

        const product = await Product.find({
            "categoryType.category": categoryId,
            "categoryType.type": typeId
        }, "categoryType nameDescription.name price")
       
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get a product
exports.get_a_product = async function(req,res){
    try{
        const {productId} = req.params
        
        const product = await Product.findById(productId)
       
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}
