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
    category_type: {
        type: categorySchema,
        required: true,
    },
    name_description: {
        type: descriptionSchema,
        required: true,
    },
    brand_details : {
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
    misc_details: {}
}, {timestamps: true})


module.exports = mongoose.model('Product', productSchema)
