const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = require('./categoryModel')

const productSchema = new Schema({
   category:{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
   },
    /*
        image field is required
    */
   name: {
    type: String,
    required: true,
   },
   description: {
    type: String,
    required: true,
   },
   details : {
    type: String,
    required: true,
   },
   brand : {
    type: String,
    required: true,
   },
    mrp : {
        type: Number,
        required: true,
    },
    discount : {
        type: Number,
    },
    rating : {
        type: Number,
    },
    stock : {
        type: Number,
        required: true,
        validate: {
            validator: function(v){
                return v > 0
            },
            message: 'value must be greater than 0'
        }
    },
    color:[{
        type: String,
        required: true,
    }],
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)