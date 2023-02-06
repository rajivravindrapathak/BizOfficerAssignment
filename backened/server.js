const express = require("express")
const {connection} = require("./config/db")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 6000 

app.use(cors())
app.use(express.json())

app.get((req, res) => {
    res.send("hello bcrOfficer")
})

app.listen(PORT, async () => {
    try {
        await connection
        console.log("connection ok to database")
    } catch (err) {
        console.log("not connected to database")
        console.log(err)
    }
    console.log(`listining on port ${PORT}`)
})