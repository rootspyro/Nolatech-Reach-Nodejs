const express = require("express")
const app = express()
const port = 3000

app.get('/api/v1', (req, res) => {
  res.json({
    data: "Hello world"
  })
})

app.listen(port, () => {
  console.log(`listening on port :${port}`)
})
