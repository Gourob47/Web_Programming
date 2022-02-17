const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/NewData', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(()=>{
  console.log(`Connection Successsful`);
}).catch(()=>{
    console.log(`Connection unSuccesssful`);
})