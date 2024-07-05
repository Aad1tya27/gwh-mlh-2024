import express from "express"
const app = express()

enum Status{
    Sent = 200,
    NotFound = 404,
    ServerError = 500
}

app.get("/",(req,res)=>{
    res.status(Status.Sent).send("I love Chipotle Chicken Quesadillas!!");
})

app.listen(3000, ()=>{
    console.log("server created, http://localhost:3000");
})