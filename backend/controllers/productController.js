const Product = require('../models/productModel')


//post a product
exports.post_a_product = async function(req,res){
    try{
        const product = await Product.create({...req.body})
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

/*
    
//get all products of a particular category and type
exports.get_all_products = async function(req,res){
    try{
        const {categoryId, typeId} = req.params
        
        const category = await Category.findOne({name : categoryId})
        const type = await Type.findOne({name: typeId})

        const product = await Product.find({category: category._id, type: type._id}).populate('category', '-_id name').populate('type', '-_id name')
       
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get a product of a particular category and type
exports.get_all_product = async function(req,res){
    try{
        const {categoryId, typeId, productId} = req.params
        
        const category = await Category.findOne({name : categoryId})
        const type = await Type.findOne({name: typeId})

        const product = await Product.find({_id: productId, category: category._id, type: type._id}).populate('category', '-_id name').populate('type', '-_id name')
       
        res.status(200).json({product})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

*/