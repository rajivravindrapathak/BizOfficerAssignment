const express = require("express")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 6000

app.get((req, res) => {
    res.send("hello")
})

app.listen(PORT, async () => {
    try {
        console.log("connection ok to database")
    } catch (err) {
        console.log("not connected to database")
        console.log(err)
    }
    console.log(`listining on port ${PORT}`)
})