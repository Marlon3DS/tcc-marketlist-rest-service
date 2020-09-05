const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8000;
const strConnection = "mongodb+srv://integration-api:8FrCLIyegkcYpAPB@cluster0.vjac1.gcp.mongodb.net/MarketlistDB?retryWrites=true&w=majority"

mongoose.connect(strConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected...')
})

var Schema = mongoose.Schema()
var ProductSchema = new Schema({
  name: {
    type: String
  }
})

var Product = mongoose.model('productList', ProductSchema)

app.use(bodyParser.json())

app.get('/', (req, res) => {
  if (req.query.texto) res.send(req.query.texto)
  else res.send('Hello World!')
})

app.get('/Product', (req, res) => {
  Product.find((err, products) => {
    res.json(products)
  })
})

app.post('/Product', (req, res) => {
  let product = new Product(req.body)
  product.save({}, (err, product) => {
    res.send(product)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})