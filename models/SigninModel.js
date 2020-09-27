
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SigninSchema = new Schema({
    username: String,
    password:String
  },{ collection : 'Signin' });
  const SigninModel = mongoose.model('SigninSchema', SigninSchema);
exports.SearchSignIn =  (username,pass)=>{
   

     const fetched = SigninModel.findOne({username : username,password:pass})

   return fetched;
  
}
