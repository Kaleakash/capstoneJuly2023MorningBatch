let dbCollRef = require("../config/dbConfig");

exports.signIn= async(login)=> {
    // let loginDbInfo = await dbCollRef.getCollection("User").findOne({emailid:login.emailid});
    // //console.log(result);
    // if(loginDbInfo==null){
    //     return "Emailid is invalid";
    // }else {
    //     if(loginDbInfo.password==login.password){
    //             if(loginDbInfo.typeofuser=="admin"){
    //                 return "admin login successfully";
    //             }else {
    //                 return "customer login successfully";
    //             }
    //     }else {
    //         return "Passwod is invalid";
    //     }
    // }

    let loginDbInfo = await dbCollRef.getCollection("User").findOne({emailid:login.emailid,password:login.password,typeofuser:login.typeofuser});
    //console.log(result);
    if(loginDbInfo==null){
        return "Invalid login details";
    }else {
                if(loginDbInfo.typeofuser=="admin"){
                    return "admin login successfully";
                }else {
                    return "customer login successfully";
                }
     }
}


exports.signUp=async(login)=> {
    let result = await dbCollRef.getCollection("User").find({emailid:login.emailid}).toArray();
    if(result.length==0){
        let result = await dbCollRef.getCollection("User").insertOne(login);
        return "Account created successfully";
    }else {
        return "Emailid must be unique";
    }
    
}