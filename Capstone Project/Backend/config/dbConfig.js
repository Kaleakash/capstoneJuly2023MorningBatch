let mongoClient = require("mongodb").MongoClient;       // created reference of mongo client 
//let url = "mongodb://localhost:27017/";
let url = "mongodb://127.0.0.1:27017/";
let dbClient;
let admin = {"emailid":"admin@gmail.com","password":"admin@123","typeofuser":"admin"}

exports.connect = ()=> {
    mongoClient.connect(url).then(result=> {
        console.log("Database connected successfully");
        dbClient=result;
        adminAccountCreate();
       
    }).catch(error=>{
        console.log("error "+error);
    })

}

exports.getCollection=(name)=> {
    return dbClient.db("capstone").collection(name);
}

async function adminAccountCreate() {
    let result = await dbClient.db("capstone").collection("User").find({emailid:"admin@gmail.com"}).toArray();
    if(result.length==0){
        let result = await dbClient.db("capstone").collection("User").insertOne(admin);
    }
}
