const express = require ("express")
const Fit= require("../models/workouts")
const router = express.Router()

const db= require("../models")



//----Routes & Controllers-----
router.get ("/", (req,res) =>{
    const bench = new Fit({
        name: "Bench Press",
        type: "Chest",
        img: "",
        description: " Main chest exercise"
    })

    bench.save()
    .then ((result) => {
        res.send(result)
    })
})


//Home Route
router.get ("/home", (req,res) => {
    res.render("home.ejs")
   
    })

//Workouts
 router.get ("/workouts", (req,res)=> {
 Fit.find()
 .then ((result) => {
     res.render("workouts.ejs", {name: "Bench Press", Fit: result})
 })   
 })

//  router.get("/workouts", (req,res) => {
// Fit.find()
// .then((result) => {
//     res.send(result)
// })
//  })


//POST
router.post("/workouts", (req,res) =>{
    res.redirect("/workouts")
    console.log("works")
})








module.exports=router