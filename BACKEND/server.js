const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8078


app.use(cors());
app.use(bodyParser.json());



const URL = process.env.MONGO_URL

mongoose.connect(URL, {

    useNewUrlParser: true, 
    useUnifiedTopology: true  
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

const conection = mongoose.connection;

conection.once("Open" , ()=>{
    console.log("mongoDB running succsessfuly")
})

const studnetRouter  = require("./Routes/studnets.js")
app.use("/student" , studnetRouter)

app.listen(PORT , () => {

    console.log(`Server is up and runnig on ${8070}`)
})