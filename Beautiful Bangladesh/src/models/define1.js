const mongoose = require("mongoose");


const employeeSchemaa = new mongoose.Schema({




    Fullname : {
        type: String,
        required:true,

       
    },

    Email : {
        type: String,
        required:true,
    
      
      
    },

    Phone : {
        type: String,
        required:true,
  
    },

    Message : {
        type: String,
        required:true,
       
    },

    date :{
   type: Date,
   default: Date.now
}
})



const Registerr= new mongoose.model("Registerr",employeeSchemaa);
module.exports = Registerr;
