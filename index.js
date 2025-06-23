const express=require("express");
const app=express();
const Port= process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.json({msg:'hey'});
})

app.listen(Port, ()=>{console.log(`Server running on ${Port}`)});