const express = require("express")
const app = express()
const port = 3000

const router = require("./router")

app.use("/api/v1", router)

app.listen(port, () => {
  console.log(`listening on port :${port}`)
})
