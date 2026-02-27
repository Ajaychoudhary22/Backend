const express = require('express')
//database se connect karne ke liye hamne ek alag file banayi hai jiska naam db.js hai aur usme hamne mongoose ka use karke apne database se connect kiya hai
const connectDB = require('./src/db/db')

connectDB();




const app = express();

app.use(express.json() )


app.get('/',(req,res)=>{
    res.send('Hello World')
})



// we can create a post api 
app.post("/notes",(req,res)=>{
    const {title,content}= req.body;
    res.send(`Note created with title: ${title} and content: ${content}`)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})