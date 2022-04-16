const express = require ("express");
const app = express();
const cors = require('cors');
app.use(express.json());    

const mongoose = require("mongoose");

const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
  
const dotenv = require("dotenv");
 dotenv.config();
const connect =  async() => {
    try  {
        return  mongoose.connect(
            "mongodb+srv://kritika:kritika@cluster0.lbvtd.mongodb.net/KFCclone?retryWrites=true&w=majority"
         )
    }
    catch(err){
        console.log("connection error")
    }
        }

  
app.use(cors({origin: true, credentials: true}));
app.use("/signup",registerController);
app.use("/login",loginController);

        app.listen(process.env.PORT||8800,async() => {
            try{
              await  connect();
                console.log("connected to port 8800")
            }
            catch(err){
                console.log(err.message)
            }
        })