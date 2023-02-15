const Category = require('../models/categoryModel')

//get all categories
exports.get_all_categories = async function(req,res) {
    try{
        const categories = await Category.find()
        res.status(200).json({categories})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get a category
exports.get_a_category = async function(req,res) {
    try{
        const categoryId = req.params.categoryId
        const category = await Category.find({category: categoryId})
        res.status(200).json({category})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//post a new category and name
exports.post_a_category = async function(req,res) {
    try{
        const {category, name} = req.body
        const cat = await Category.findOneAndUpdate({category}, {$push: {name: name}})

        if(!cat){
            const newCategory = await Category.create({category, name})
            return res.status(200).json({category: newCategory})
        }

        res.status(200).json({category: cat})

    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//delete a category
exports.delete_a_category = async function(req,res) {
    try{
        const {categoryId, nameId} = req.params

        const emptyCat = await Category.findOne({_id: categoryId})
        
        if(!emptyCat.name.length){
            const delCat = await Category.findByIdAndDelete({_id: categoryId})
            return res.status(200).json({category: delCat})
        }
        
        const category = await Category.findOneAndUpdate({_id: categoryId}, {$pull: {name: nameId}})
        
        if(!category){
            res.status(404).json({
                error: 'Category not found'
            })
        }
        res.status(200).json({category})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}