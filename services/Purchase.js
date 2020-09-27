var Purchase = require("../models/Purchase");
var moment = require('moment')


exports.PurchaseService = async (data)=>{

    const purchaselength = Purchase.findLatestPurchase();
    let purchceId  = await purchaselength.then(d=>d.length);
    
  
    let finaldata = data;
    finaldata["purchaseId"]=purchceId+1;
    finaldata["TotalAmount"]=finaldata["rate"]*finaldata["quantity"]
    finaldata["lastUpdate"]=moment().format("DD/MM/YYYY");
  
    
    const purchasedItem = Purchase.InsetPurchase(finaldata);
    

    return purchasedItem;
}
