var {PurchaseService} = require("../services/Purchase")
/* GET users listing. */
exports.PurchaseController=  (req, res, next) =>{
   const result =  PurchaseService(req.body);
 

    result.then((d)=>{
        
        res.send(d)
           
    }).catch(e=>res.status(404).send("not inserted"))
 
}