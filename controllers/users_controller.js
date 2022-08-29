const bcrypt = require("bcrypt")
const express = require ("express")
const router= express.Router()
const User = require("../models/users.js")

// router.get("/register", (req,res) => {
//     res.render("register.ejs")
//     console.log("hi")
    
// })


// router.post("/register", (req,res) => {
//     req.body.name
//    const salt = bcrypt.genSaltSync(10)
//    User.push({
//        username: req.body.name,
//        password: salt
//    })
//    res.redirect("/users")
//    console.log(User)
// })










module.exports = router