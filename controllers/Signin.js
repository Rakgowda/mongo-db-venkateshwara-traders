var {SigninService} = require("../services/SigninService")
/* GET users listing. */
exports.Sinin=  (req, res, next) =>{
   const result =  SigninService(req.query.username,req.query.pass)
 
    result.exec((e,d)=>{
            if(d){
                console.log(d);
                res.send(d)
            }
            else{
                res.status(404).send("user name and password not matchng")
            }
    })
 
}
