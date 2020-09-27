
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    CustomerName: String,
    sellId:{type:Schema.Types.Object,default:{}},
    purchaseId:{type:Schema.Types.Object,default:{}},
    SellTotalAmount:Number,
    PurchaseTotalAmount:Number,
    TransactionId:Number,
    TotalAmount:Number,
    lastUpdate:String,
  },{ collection : 'Transaction' ,minimize: false});
  const TransactionModel = mongoose.model('TransactionSchema', TransactionSchema);

  exports.InsetTransaction = (data)=>{

    const insetTransaction = TransactionModel.create(data);

    return insetTransaction;
  }

  exports.findLatestTrasaction = ()=>{

    const findLatestTrasaction = TransactionModel.find({}).exec()

    return findLatestTrasaction;

   
  }
