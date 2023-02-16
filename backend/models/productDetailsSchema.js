const mongoose = require('mongoose')
const Schema = mongoose.Schema


//description schema
const descriptionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required : true,
    },
    dimensions: {},   
},{_id: false})


//brand schema
const brandSchema = new Schema({
    brandName : {
        type: String,
        required: true,
    },
    modelNo: {
        type: String,
        required: true,
    },
    ASIN: {
        type: String,
        required: true,
    }
})


//category schema
const categorySchema = new Schema({
    category:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, {_id: false})


//price schema
const priceSchema = new Schema({
    mrp : {
        type: Number,
        required: true,
    },
    sellingPrice : {
        type: Number,
    },
}, {_id: false})


//quantity schema
const quantitySchema = new Schema({
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
})


module.exports = {
    brandSchema,
    descriptionSchema,
    categorySchema,
    priceSchema,
    quantitySchema
}