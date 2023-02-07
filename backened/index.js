const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const {UserModel} = require("./models/UserModel")
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 6000 

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello bcrOfficer")
})

// signup api
app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body
    // if user already signup it means user alrady exits please try login
    const isUser = await UserModel.findOne({email})
    if(isUser) {
        res.send({"msg" : "user already exits please login"})
    }
    else {
        bcryptjs.hash(password, 4, async function(err, hash) {
            if(err) {
                res.send("something went wrong, please try again")
            } 
            else {
                const new_user = new UserModel({
                    name,
                    email,
                    password : hash
                })
            
                try {
                    await new_user.save()
                    res.send({"msg" : "sign up successfull"})
                } catch(err) {
                    res.send({"msg" : "something went wrong, please try again"})
                }
            }
        });
    }
})

//login api
app.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email})
    const hashed_password = user.password
    const user_id = user._id
    console.log(user)
    console.log(user_id)
    bcryptjs.compare(password, hashed_password, function(err, result) {
        if(err) {
            res.send({"msg": "something went wrong, please try again later"})
        }
        if(result) {
            const token = jwt.sign({user_id}, process.env.SECRET_KEY)
            res.send({message : "login successful", token})
        } else {
            res.send({"msg" : "login failed"})
        }  
    });  
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