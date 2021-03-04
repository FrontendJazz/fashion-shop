import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: {type: String, required: true, default: 0},
  brand: {type: String, required: true},
  color: {type: String, required: true},
  countInStock: {type: String, required: true, default: 0},
  images: {type: Array, required: true, default: []},
})

const Products = mongoose.model('products', productSchema)
export default Products