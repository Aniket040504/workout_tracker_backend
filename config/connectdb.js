const mongoose=require('mongoose');

const connect=async (url) => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected on ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=connect; 
