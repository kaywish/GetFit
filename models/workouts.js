const mongoose = require("mongoose")
const fitSchema= new mongoose.Schema ({
    name: String,
    type: String,
    img: String,
    description: String,
})

const Fit= mongoose.model("Fit", fitSchema)

module.exports = Fit