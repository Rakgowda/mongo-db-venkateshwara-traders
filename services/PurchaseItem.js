var ItemPurchase = require("../models/PurchaseItem");


exports.PurchaseItemService =()=>{
    const purchasedItem = ItemPurchase.FetchAllPurchaseItem()

    return purchasedItem;
}
