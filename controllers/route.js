const express = require ("express")
const Fit= require("../models/workouts")
const router = express.Router()

const db= require("../models")



//----Routes & Controllers-----
// router.get ("/", (req,res) =>{
//     const bench = new Fit({
//         name: "Bench Press",
//         type: "Chest",
//         img: "",
//         description: " Main chest exercise"
//     })

//     bench.save()
//     .then ((result) => {
//         res.send(result)
//     })
// })


//Home Route
router.get ("/home", (req,res) => {
    res.render("home.ejs")
   
    })

//Workouts
 router.get ("/workouts", (req,res)=> {
 Fit.find()
 .then ((result) => {
     res.render("workouts.ejs", { Fit: result})
 })   
 })


//Users
router.get("/users", (req,res) => {
    res.render("users.ejs")
})

//Register
// router.get("/register",(req,res) => {
//     res.render("register.ejs")
// })



//POST
router.post("/workouts", (req,res) =>{
    res.redirect("/workouts")
    console.log("works")
})


//EDIT
router.get ("/add", (req,res) => {
    Fit.find()
    .then ((result) => {
        res.render("edit.ejs", { Fit: result})
    })   
    })






//Show Route
router.get("/workouts/:id", (req,res) => {
    Fit.find()
    .then ((Fit) => {
    res.render("show.ejs", { Fit: Fit[req.params.id]})
    })
})










module.exports=router