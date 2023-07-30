let medicareRepository = require("../repository/medicareRepository");

exports.store=async(req,res)=> {
    let medicare = req.body;
    let result = await medicareRepository.store(medicare);
    res.send(result);
    
}
exports.findAll= async(req,res)=> {
   let result  = await medicareRepository.findAll();
   res.send(result);
}

exports.searchByName= async(req,res)=> {
    // using query param or path param
    let name = req.params.name;
    let result  = await medicareRepository.searchByName(name);
    res.send(result);
 }

 exports.deleteById= async(req,res)=> {
    let id = req.params.id;
    let result  = await medicareRepository.deleteById(id);
    res.send(result);
 }

 exports.updaeMedicareDetails= async(req,res)=> {
    let medicare = req.body;
    let result = await medicareRepository.updateMedicareDetails(medicare);
    res.send(result);
 }




