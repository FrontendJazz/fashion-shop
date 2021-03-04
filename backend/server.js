import express from 'express'
import {connectionDB} from './mongoose/db.js'
import Products from "./models/Product.model.js";
import dotenv from 'dotenv'
const server = express()
const port = 8080
dotenv.config()
connectionDB()

server.get('/api/v1/dresses', async(req, res) => {
  const products = await Products.find()
  res.json(products)
})

server.get('/api/v1/dresses/:id', async(req, res) => {
  const {id} = req.params
  const product = await Products.findOne({id: +id})
  res.json(product)
})

server.listen(port, () => {
  console.log(`Server is running:${port}`)
})