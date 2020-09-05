const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8000;
const connection = "mongodb+srv://integration-api:8FrCLIyegkcYpAPB@cluster0.vjac1.gcp.mongodb.net/sample_airbnb?retryWrites=true&w=majority"

// MarketlistDB

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected...')
})

app.get('/', (req, res) => {
  if (req.query.texto) res.send(req.query.texto)
  else res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})