const express = require("express")
const router = express.Router()

// return the list of users
router.get("/user", (req, res) => {
  const exampleData = [
    {
      id: 1,
      username: "spyro",
      email: "root.spyro@gmail.com",
    },
    {
      id: 2,
      username: "daniel",
      email: "example@gmail.com",
    },
  ]
  
  res.json(exampleData)
})

module.exports = router
