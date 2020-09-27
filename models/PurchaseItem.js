
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PurcahseITemSchema = new Schema({
    itemName: String,
    itemId:Number,
    rate:Number,
    lastUpdate:String
  },{ collection : 'ItemPurchase' });
  const PurcahseItemModel = mongoose.model('PurcahseITemSchema', PurcahseITemSchema);

  exports.FetchAllPurchaseItem = ()=>{

    const fetchItemPurchase = PurcahseItemModel.find();

    return fetchItemPurchase;
  }
