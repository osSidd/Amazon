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

//get all categories
exports.get_all_categories = async function(req,res){
    try{
        const categories = await Product.find({}, "-_id category_type.category")
        let arr = categories.map(item => {
            return item.category_type.category
        })
        res.status(200).json({categories: arr})
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

        const products = await Product.find({
            "category_type.category": categoryId
        }, "category_type name_description.name price")
       
        res.status(200).json({products})
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

        const products = await Product.find({
            "category_type.category": categoryId,
            "category_type.type": typeId
        }, "category_type name_description.name price")
       
        res.status(200).json({products})
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
