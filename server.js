const express = require("express")
const app = express()

app.use(express.json())
app.use (express.urlencoded({extended: false}))

const Fit= require("./models/workouts")

app.use(express.static("public"))

const mongoose= require("mongoose")
const { Router } = require("express")
mongoose.connect("mongodb://127.0.0.1:27017/basiccrud2")
mongoose.connection.once("open", () => {
    console.log("Connected to Mongo")
})

const methodOverRide= require("method-override")
app.use(methodOverRide("_method"))


const allWorkouts= [
    {
        name: "Bench Press",
        type: "Chest",
        img: "",
        description: "This workout is for the chest"
    },
    {
        name: " Incline Dumbbell Press",
        type: "Chest",
        img: "",
        description: " This workout is for the upper chest"
    },
    {
        name: "Cable Flyes",
        type: "Chest",
        img: "",
        description: " This workout is for the mid chest"
    }
]









//Index Route
app.get ("/workout", (req,res) => {
    Fit.find({}, (err, fit) => {
        res.render("index.ejs", {fit : Fit})
    })
})








app.listen (3001, () => {
    console.log ("Listening on Port 3001")
})