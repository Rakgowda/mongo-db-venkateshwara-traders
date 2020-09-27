
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SellSchema = new Schema({
    itemName: String,
    itemId:Number,
    rate:Number,
    sellId:Number,
    quantity:Number,
    TotalAmount:Number,
    lastUpdate:String
  },{ collection : 'Sell' });
  const SellModel = mongoose.model('SellSchema', SellSchema);

  exports.InsetSell = (data)=>{

    const insertSell = SellModel.create(data);

    return insertSell;
  }

  exports.findLatestSell = ()=>{

    const findLatestSell = SellModel.find({}).exec()

    return findLatestSell;

   
  }
  exports.findSellById = (filter)=>{

    const findSellById = SellModel.find(filter).exec();

    return findSellById;

   
  }