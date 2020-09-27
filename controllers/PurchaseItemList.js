var {PurchaseItemService} = require("../services/PurchaseItem")
/* GET users listing. */
exports.PurchaseItemController=  (req, res, next) =>{
   const result =  PurchaseItemService()
 
    result.exec((e,d)=>{
            if(d){
                console.log(d);
                res.send(d)
            }
            else{
                res.status(404).send("item is empty")
            }
    })
 
}