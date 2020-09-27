
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SellItem = new Schema({
    itemName: {type:String,unique: true},
    itemId:Number,
    rate:Number,
    lastUpdate:String
  },{ collection : 'ItemSell' });
  const SellItemModel = mongoose.model('SellItem', SellItem);

  exports.FetchAllSellItem = ()=>{

    const fetchItemSell = SellItemModel.find();

    return fetchItemSell;
  }
  exports.UpdateSellItem = (conditionData,UpdateData)=>{
    

    const updateItemSell = SellItemModel.findOneAndUpdate(conditionData,UpdateData,{new: true});

    return updateItemSell;
  }
  
  exports.CreateSellItem = (data)=>{
    
    console.log("---Model---");

  
    const createSellItem = SellItemModel.create(data);

    return createSellItem;
   
  }


  exports.SellItemDelete = (condinaldata)=>{
    
    console.log("---Model---");

  
    const deleteSellItem = SellItemModel.findOneAndDelete(condinaldata);

    return deleteSellItem;
   
  }
  