require("dotenv").config()
const express = require("express")
const app = express()
const methodOverRide= require("method-override")
const userController = require("./controllers/users_controller.js")
const PORT= process.env.PORT || 3001
const SESSION_SECRET= process.env.SESSION_SECRET
const session = require("express-session")
const bodyParser = require("body-parser");
console.log(SESSION_SECRET)


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized:false,
}))

app.use("/users", userController)


// Make currentUSer be avail on all route
//



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
app.use("/",fitController)

 // internal Routes
// router.use("/workout", testCtrl)



app.listen (PORT, () => {
    console.log ("Listening on Port 3001")
})