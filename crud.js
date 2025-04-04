const express=require('express');
const app=express();
const port=3002;

const database=[{id:1,name:"anushka",age:20},{id:2,name:"aditya",age:21}]
app.use(express.json())

//create(C)
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    };
    database.push(newuser);
    res.status(201).json(newuser);
})

//READ(R)-read all
app.get('/users',(req,res)=>{
    res.json(database)
})

//read one
app.get('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const user=database.find(u=>u.id===userid)
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})


//Update(u)
app.put('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const userindex=database.findIndex(u=>u.id===userid)
    if(userindex!==-1){
        database[userindex]={...database[userindex],...req.body};
        res.json(database[userindex]);
    }
    else{
        res.status(404).json({message:"user not found"})
    }


})

//DElete (D)
app.delete('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const userindex=database.findIndex(u=>u.id===userid)
    if(userindex!==-1){
        const deleteuser=database.splice(userindex,1);
        res.json(deleteuser);
    }

    else{
        res.status(404).json({message:"user not found"})
    }
})



app.listen(port,()=>{
    console.log(`app is run at:${port}`);
})