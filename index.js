const mongoose = require("mongoose")

const DATABASE ="mongodb://localhost:27017/testup"

mongoose.connect(DATABASE).then(()=>{console.log("nandyyy, dbb connected")}).catch(()=>{console.log("nandyyy, no connection da")})