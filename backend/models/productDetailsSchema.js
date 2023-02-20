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
    keywords: {
        type: String,
        required: true
    }

},{_id: false})


//brand schema
const brandSchema = new Schema({
    brand_name : {
        type: String,
        required: true,
    },
    model_no: {
        type: String,
        required: true,
    },
    ASIN: {
        type: String,
        required: true,
    }
}, {_id:false})


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
    selling_price : {
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
},{_id: false})

function getObject(arr){
    let obj = {}
    for(let item of arr){
        obj[item] = ''
    }
    return obj
}

const productField = {
    category_type: getObject(Object.keys(categorySchema.obj)),
    name_description: getObject(Object.keys(descriptionSchema.obj)),
    brand_details: getObject(Object.keys(brandSchema.obj)),
    price: getObject(Object.keys(priceSchema.obj)),
    quantity: getObject(Object.keys(quantitySchema.obj)),
}



module.exports = {
    brandSchema,
    descriptionSchema,
    categorySchema,
    priceSchema,
    quantitySchema,
    productField,
}