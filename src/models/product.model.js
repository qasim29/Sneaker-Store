const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = Schema(
	{
		
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
