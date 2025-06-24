const express=require("express");
const dotenv=require('dotenv').config();
const cors = require('cors');
const connectDB=require('./config/connectdb');
const Port= process.env.PORT || 8000;
const work=require('./routes/workoutRoutes')

connectDB();

const app=express();

app.use(express.json());
app.use(cors()); 

app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})

app.use('/',work);


app.listen(Port, ()=>{console.log(`Server running on ${Port}`)});