//yha or ham server ko apne database se connect karenge

const mongoose= require('mongoose');




// Connect to MongoDB

function connectdb(){
    mongoose.connect("mongodb+srv://ajayc3498_db_user:gZr9foaem1DFAbzd@cluster0.ippdocy.mongodb.net/Backend").then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("error connecting to database",err);
    });
}
module.exports=connectdb;

