let userRepository = require("../repository/userRepository");


exports.signIn=async(req,res)=> {
    let login = req.body;
    let result = await userRepository.signIn(login);
    res.send(result);
    
}


exports.signUp= async(req,res)=> {
    let login = req.body;       // {emailid:"admin@gmail.com","password":"admin@123","typeofuser":"admin"}
    if(login.typeofuser=="admin"){
        res.send("You can't crete admin account");
    }else {
        let result = await userRepository.signUp(login);
        res.send(result);
    }
}

