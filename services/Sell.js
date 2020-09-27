var Sell = require("../models/Sell");
var moment = require('moment')


exports.SellService = async (data)=>{

    const selllength = Sell.findLatestSell();
    let sellId  = await selllength.then(d=>d.length);
    
  
    let finaldata = data;
    finaldata["sellId"]=sellId+1;
    finaldata["TotalAmount"]=finaldata["rate"]*finaldata["quantity"]
    finaldata["lastUpdate:"]=moment().format("DD/MM/YYYY");
  
    
    const SellInsert = Sell.InsetSell(finaldata);
    

    return SellInsert;
}
