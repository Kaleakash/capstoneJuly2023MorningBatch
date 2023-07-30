let express = require("express");
let dbConRef = require("./config/dbConfig");
let userRouter = require("./router/userRouter");
let medicareRouter = require("./router/medicareRouter");
let app = express();

dbConRef.connect();     // calling function to connect the database
app.use(express.json());        // enable post data from req body in the form of json. 


// middleware 
//http://localhost:9090/medicare/login/
app.use("/medicare/login",userRouter);

//http://localhost:9090/medicare/info/*

app.use("/medicare/info",medicareRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"))