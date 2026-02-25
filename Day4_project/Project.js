 const express = require('express');


const app = express();
  
app.use(express.json());// Middleware to parse JSON bodies

const notes =[];



// app.post("/about",(req,res)=>{
//     console.log(req.body); // Log the received data to the console
//     notes.push(req.body); // Store the received data in the notes array
//     res.json({message:"Data received successfully", notes:notes}); // Send a response back to the client
    
// })
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})


