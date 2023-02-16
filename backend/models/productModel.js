const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {
    brandSchema,
    categorySchema,
    descriptionSchema,
    priceSchema,
    quantitySchema
} = require('./productDetailsSchema')

 
//product schema
const productSchema = new Schema({
    categoryType: {
        type: categorySchema,
        required: true,
    },
    nameDescription: {
        type: descriptionSchema,
        required: true,
    },
    brandDetails : {
        type: brandSchema,
        required: true,
    },
    price: {
        type: priceSchema,
        required: true,
    },
    quantity: {
        type: quantitySchema,
        required: true,
    },
    miscDetails: {}
}, {timestamps: true})


module.exports = mongoose.model('Product', productSchema)
