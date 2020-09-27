var Transaction = require("../models/Transaction");
var {findSellById} = require("../models/Sell")
var {findPurchaseById} = require("../models/Purchase")
var {AmountCalculate} = require("./AmountCalculate")
var moment = require('moment')
var _ = require('lodash')

exports.TransactionService = async (data)=>{

    const transactionlength = Transaction.findLatestTrasaction();
    let transactionid  = await transactionlength.then(d=>d.length);
    var Sell =0;
    var SellAmount = 0;
    var Purchase=0;
    var PurchaseAmount=0;
    if(!_.isEmpty(data["sellId"]))
    {
        Sell = findSellById(data["sellId"]);
         SellAmount  = await Sell.then(d=>{
            return AmountCalculate(d,"TotalAmount")
        });
    }
    
    if(!_.isEmpty(data["purchaseId"]))
    {
        Purchase = findPurchaseById(data["purchaseId"]);
         PurchaseAmount  = await Purchase.then(d=>AmountCalculate(d,"TotalAmount"));
      
    }
    
    let finaldata = data;
    if(PurchaseAmount==0)
    {
        finaldata["TotalAmount"]=SellAmount;
    }
    else if(SellAmount==0)
    {
        finaldata["TotalAmount"]=PurchaseAmount;
    }
    else{
        finaldata["TotalAmount"]=PurchaseAmount-SellAmount;
    }
    finaldata["SellTotalAmount"]=SellAmount;
    finaldata["PurchaseTotalAmount"]=PurchaseAmount;
    finaldata["TransactionId"]=transactionid+1;
 
    finaldata["lastUpdate"]=moment().format("DD/MM/YYYY");
  
    
    const transaction = Transaction.InsetTransaction(finaldata);
    

    return transaction;
}
 