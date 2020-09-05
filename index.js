const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  if (req.query.texto) res.send(req.query.texto)
  else res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})