var {SellItemService,SellItemUpdateService,SellItemCreateService
,SellItemDeleteService} = require("../services/SellItem")

/* GET users listing. */
exports.SellItemController=  (req, res, next) =>{
   const result =  SellItemService()
 
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
exports.SellItemUpdateController=  (req, res, next) =>{
    const result =  SellItemUpdateService(req.body)
  
     result.exec((e,d)=>{
             if(d){
               
                 res.send(d)
             }
             else{
                 res.status(404).send("item is not updated")
             }
     })
  
 }
 exports.SellItemCreateController=  (req, res, next) =>{
    const result =  SellItemCreateService(req.body);
  
     result.then(d=>{
        res.send(d).status(201)
     }).catch(e=>{
        if(e.name=="MongoError")
        {
            res.status(409).send("item not created because item is alreaday present")

        }
        else{
                res.status(500).send("bad request")
        }
     })
  
 }
 exports.SellItemDeleteController=  (req, res, next) =>{
     console.log("---controller---");
    const result =  SellItemDeleteService(req.body);
  
     result.then(d=>{
         
        res.send(d)
     }).catch(e=>{
        if(e.name=="MongoError")
        {
            res.status(409).send("item not created because item is alreaday present")

        }
        else{
                res.status(500).send("bad request")
        }
     })
  
 }
 