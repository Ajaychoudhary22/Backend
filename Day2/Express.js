
const express = require("express")

const app = express()  // jab ham express ko call karte hai to hame ek object milta hai jise hum app me store kar lete hai. is object ke through hum apne server se related sare kaam kar sakte hai.

app.get("/",(req,res)=>{
    res.send("server is started")  // ye ek route hai jisme "/" ka matlab hai root route. jab bhi koi user is route par request bhejta hai to ye function chalega jisme req (request) aur res (response) parameters hote hai. res.send() method se hum response bhejte hai.

})

app.get("/home",(req,res)=>{
    res.send("welcome to the Home Page");
})

app.listen(3000,()=>{
    console.log("running on port number 3000");  // app.listen() method se hum apne server ko kisi specific port par listen karte hai. jab bhi koi user is port par request bhejta hai to ye server us request ko handle karta hai. is method ke andar hum ek callback function bhi de sakte hai jo tab chalega jab server successfully start ho jata hai.
    
})