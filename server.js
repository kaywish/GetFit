require("dotenv").config()
const express = require("express")
const app = express()
const methodOverRide= require("method-override")



//Internal Modules
const fitController = require("./controllers/route.js")

//Config
const Port= process.env.PORT||3001;
app.set("view engine","ejs")

//Middleware
app.use(express.json())
app.use (express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverRide("_method"))

//Routes
app.use(fitController)

 // internal Routes
// router.use("/workout", testCtrl)



app.listen (3001, () => {
    console.log ("Listening on Port 3001")
})