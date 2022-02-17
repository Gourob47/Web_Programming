const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    txt : {
        type: String,
        required:true,
        unique:true
       
    },

    user : {
        type: String,
        required:true,
        unique:true
      
      
    },

    email : {
        type: String,
        required:true,
        unique:true
    },

    pswd : {
        type: String,
        required:true,
        unique:true
    },

    date :{
        type: Date,
        default: Date.now
     }

})



const Register= new mongoose.model("Register",employeeSchema);
module.exports = Register;







