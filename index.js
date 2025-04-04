//require=keyword requirement
const express=require('express');      //calling all the modules of express
const path=require('path');
const app=express();                 //acessing all the features/modules of express
const port=3001;                    //port for establishing connectivity
const user=require('./data');

/*app.get('/',(req,res)=>{         //backslash means home page
    res.send("this is our home page");
})                   

app.get('/about',(req,res)=>{  //get=server passing value to clien
    res.sendFile(path.join(__dirname,"home.html"))
})

app.get('/aboutus',(req,res)=>{        
    res.sendFile(path.join(__dirname,"aboutus.html"));
})

app.get('/contactus',(req,res)=>{        
    res.sendFile(path.join(__dirname,"contactus.html"));
})
app.get('/home',(req,res)=>{        
    res.sendFile(path.join(__dirname,"home.html"));
})

app.post("/api/abes",(req,res)=>{
    console.log('body',req.body)
    res.json()
})*/
app.use(express.json())
app.post('/api/abes',(req,res)=>{
    console.log('body',req.body);
    res.json({})
})

app.listen(port,()=>{
    console.log(`app is run at:-${port}`)
})

