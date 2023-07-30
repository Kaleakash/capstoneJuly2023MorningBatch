let express = require("express");

let router = express.Router();

let medicareController = require("../controller/medicareController");

router.post("/store",medicareController.store);
router.get("/findAll",medicareController.findAll);
router.get("/search/:name",medicareController.searchByName);
router.delete("/delete/:id",medicareController.deleteById);
router.put("/update",medicareController.updaeMedicareDetails);


module.exports=router;