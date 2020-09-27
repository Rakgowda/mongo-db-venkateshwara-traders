var ItemSell = require("../models/SellItem");
var moment = require('moment')


exports.SellItemService =()=>{
    const SellItem = ItemSell.FetchAllSellItem()

    return SellItem;
}

exports.SellItemUpdateService =(data)=>{
    let conditionData = data[0]
    let UpdateData = data[1]
    
    const SellItem = ItemSell.UpdateSellItem(conditionData,UpdateData)

    return SellItem;
}

exports.SellItemCreateService =async (data)=>{
    const sellItemlength = ItemSell.FetchAllSellItem();
    let sellItemId  = await sellItemlength.then(d=>d.length);
    
    let finaldata = data;
    finaldata["itemId"]=sellItemId+1;
    finaldata["lastUpdate"]=moment().format("DD/MM/YYYY");
    const SellItem = ItemSell.CreateSellItem(finaldata);

    return SellItem;
}
exports.SellItemDeleteService =async (data)=>{
    console.log("---Service---");
    
    const deleteSellItem = ItemSell.SellItemDelete(data);

    return deleteSellItem;
}
