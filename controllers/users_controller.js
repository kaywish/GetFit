const bcrypt = require("bcrypt")
const express = require ("express")
const router= express.Router()
const User = require("../models/users.js")

router.get("/register", (req,res) => {
    res.render("register.ejs")
    console.log("hi")
    
})


router.post("/register", (req,res) => {
   const salt = bcrypt.genSaltSync(10)
   console.log(req.body)
    })


module.exports = router