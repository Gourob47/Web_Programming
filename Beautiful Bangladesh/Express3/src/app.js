const express= require("express");
const path= require("path");

const app= express();



require("./db/conn");




const Register= require("./models/define");
const Registerr = require("./models/define1");




const port= process.env.PORT || 3000;


const static_path= path.join(__dirname,"../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','pug');

//app.use(express.static(static_path));


//app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
//app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
//app.use('/jq',express.static(path.join(__dirname,"../node_modules/jQuery/dist")));
app.use(express.static(static_path));

//console.log(path.join(__dirname));


app.get('/',(req,res)=>{
    res.render("index.pug");
})

app.get('/login',(req,res)=>{
    res.render("index.pug");
})


app.get('/about',(req,res)=>{
    res.render("about.pug");
})



app.get('/in',(req,res)=>{
    res.render("about.pug");
})





app.post('/',async(req,res)=>{
      try{
           // console.log(req.body.txt);  
           // res.send(req.body.txt);

      

          

            const regEmployee= new Register({
                txt:req.body.txt,
                user:req.body.user,
                email: req.body.email,
                pswd: req.body.pswd,
            

           

           })
           const reg = await regEmployee.save();
         

           res.status(201).render("index");
         


      }
      catch(error){
              res.status(404).send("Data already exist");
      }
})



app.post('/login', async(req,res)=>{
    try{

        const Email= req.body.email;
        const pass = req.body.pswd; 


        const uemail= await Register.findOne({email:Email});
       // res.send(uemail);
       // res.send(uemail.pswd);
        //console.log(uemail);
      //  console.log(uemail.pswd);

       // console.log(`${Email} &&&& ${pass}`);

       if(uemail.pswd== pass)
       {
          
           res.status(201).render("about");

        
       }
       else
       {
         alert("Enter Valid Information");  
         res.status(404).render("index");
       }

    }
    catch(error){
        
        res.status(404).render("index");
    }
})


app.post('/in',async(req,res)=>{
    try{
         // console.log(req.body.txt);  
         // res.send(req.body.txt);

    

        

          const regEmployeee= new Registerr({
            Fullname: req.body.Fullname,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Message: req.body.Message

         

         })
         const regg = await regEmployeee.save();
         res.status(201).render("about");
         


    }
    catch(error){
            res.status(404).send("Data already exist");
    }
})







app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})