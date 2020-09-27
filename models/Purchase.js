
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PurcahseSchema = new Schema({
    itemName: String,
    itemId:Number,
    rate:Number,
    purchaseId:Number,
    quantity:Number,
    TotalAmount:Number,
    lastUpdate:String
  },{ collection : 'Purchase' });
  const PurcahseModel = mongoose.model('PurcahseSchema', PurcahseSchema);

  exports.InsetPurchase = (data)=>{

    const insertPurchase = PurcahseModel.create(data);

    return insertPurchase;
  }

  exports.findLatestPurchase = ()=>{

    const findLatestPurchase = PurcahseModel.find({}).exec()

    return findLatestPurchase;

   
  }
  exports.findPurchaseById = (filter)=>{

    const findPurchaseById = PurcahseModel.find(filter).exec()

    return findPurchaseById;

   
  }