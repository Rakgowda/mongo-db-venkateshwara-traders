var {SellService} = require("../services/Sell")
/* GET users listing. */
exports.SellController=  (req, res, next) =>{
   const result =  SellService(req.body);
 

    result.then((d)=>{
        
        res.send(d)
           
    }).catch(e=>res.status(404).send("not inserted"))
 
}