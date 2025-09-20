const Express = require('express');

const app = Express();


// here we are creating a server using express module
app.get("/home",(req,res)=>{
    res.send("Welcome to Home Page");
});

// here we are making the server to listen on port 8000
app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
});