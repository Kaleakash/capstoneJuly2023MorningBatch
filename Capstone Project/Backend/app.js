let express = require("express");
let dbConRef = require("./config/dbConfig");
let userRouter = require("./router/userRouter");
let app = express();

dbConRef.connect();     // calling function to connect the database
app.use(express.json());        // enable post data from req body in the form of json. 


// middleware 
//http://localhost:9090/medicare/*
app.use("/medicare",userRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"))