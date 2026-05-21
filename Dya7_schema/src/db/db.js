//yha or ham server ko apne database se connect karenge
const mongoose = require ('mongoose')




// Connect to MongoDB

function connectdb(){
    mongoose.connect("mongodb+srv://ajayc3498_db_user:LJGtaL5Bum1twBcy@cluster0.ippdocy.mongodb.net/chort").then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("error connecting to database",err);
    });
}
module.exports=connectdb;

