var {TransactionService} = require("../services/Transaction")
/* GET users listing. */
exports.TransactionController=  (req, res, next) =>{
   const result =  TransactionService(req.body);
 
  

    result.then((d)=>{
        
        res.send(d)
           
    }).catch(e=>res.status(404).send("Transaction is not updated"))
 
}