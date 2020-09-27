var Model = require("../models/SigninModel");


exports.SigninService =  (username,password)=>{
    console.log("-------service--------");
    let userRecord = Model.SearchSignIn(username,password);
   
    return userRecord;
    
}