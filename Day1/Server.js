

const http = require('http');
 
 const server = http.createServer((req,res)=>{
    res.end("hello word to server")  //server pr request bheji jati hai 
 }) // yha apna server create hoo jata h
 
 server.listen(3000,()=>{
    console.log("server running on port 3000");
    
 })

