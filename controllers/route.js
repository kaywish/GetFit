const express = require ("express")
const Fit= require("../models/workouts")
const router = express.Router()

const bcrypt = require("bcrypt")
const User = require("../models/users.js")
const db= require("../models")
const bodyParser = require("body-parser");

const authRequired= (req,res,next) => {
    if(req.session.currentUser){
    next()
    }else {
       res.send(" You must be logged in to do that!")
    }
}



// ----Routes & Controllers-----
// router.get ("/", (req,res) =>{
//     const bench = new Fit({
//         name: "Bench Press",
//         type: "Chest",
//         img: "https://image.shutterstock.com/image-vector/man-doing-barbell-bench-press-600w-1841766727.jpg"
    
//     })

//     bench.save()
//     .then ((result) => {
//         res.send(result)
//     })
// })


// router.post("/register", (req,res) => {
//    const salt = bcrypt.genSaltSync(10)
//    User.push({
//        username: req.body.name,
//        password: salt
//    })
//    res.redirect("/users")
//    console.log(User)
// })


router.post("/register", (req,res) => {
   const salt= bcrypt.genSaltSync(10)
   req.body.password=bcrypt.hashSync(req.body.password, salt)
   console.log(req.body)



User.findOne({username: req.body.username}, (err, userGood) => {
    if (userGood) {
        
        res.redirect("/workouts")
    } else {
        User.create (req.body, (err, created) => {
            console.log(created)
            
            req.session.currentUser= created
            res.redirect("/workouts")

        })
    }
})
})



//Sign In

router.post("/users", (req,res) => {
    User.findOne({ username: req.body.username}, (err,foundUser) =>{
        if (foundUser) {
            const validLogin= bcrypt.compareSync(req.body.password, foundUser.password)
            if (validLogin) {
            req.session.currentUser= foundUser
            res.redirect("/workouts")
            }else{
                res.send("Invalid user or pass")
            }

        } else {
        res.send ("Invalid user or pass")
        }
    })

})


// Destroy Session Route
router.get("/signout" , (req,res) => {
    req.session.destroy()
    res.redirect("/home")
})










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

// Register
router.get("/register",(req,res) => {
    res.render("register.ejs")
})



//POST
router.post("/workouts", (req,res) =>{
    res.redirect("/workouts")
    console.log("works")
})

//DELETE
router.delete ("/workouts/:id", authRequired, (req,res) => {
    Fit.findByIdAndRemove(req.params.id, (err, data) =>{
        console.log("Delete")
    res.redirect("/workouts")
    })
})


//EDIT
router.get ("/workouts/:id/edit",  (req,res) => {
    Fit.findById(req.params.id, (err, found ) =>
     {
        res.render("edit.ejs", { Fit: found 
        })
        

    })
})


//Update
router.put("/workouts/:id", (req,res) => {
    Fit.findByIdAndUpdate(req.params.id, req.body, {new:true} ,( err, update) => {
        
     console.log(req.params.id)
     console.log(req.body)
     console.log(update)
     res.redirect("/workouts")
    })
 })

// router.put("/workouts/:id", async (req,res) => {
//     let newfit
//     try{
//         newfit= await Fit.findById(req.params.id)
//         newfit.name= req.body.name
//         newfit.description= req.body.description
//         await newfit.save()
//         res.redirect("/workouts/:id")
//     } catch {
//         if (newfit == null) {
//             res.redirect("/home")
//         } else {
//         res.render("/workouts/edit" , {
//             Fit : newfit,
//             errorMessage: " Error updating "
        
//         })
//     }
    
//     }
// })




   






//Show Route
router.get("/workouts/:id", (req,res) => {
    Fit.find()
    .then ((Fit) => {
    res.render("show.ejs", { Fit: Fit[req.params.id]})
    })
})










module.exports=router