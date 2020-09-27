var express = require('express');
var router = express.Router();
var {PurchaseItemController} = require('../controllers/PurchaseItemList')
/* GET users listing. */
router.get('/',PurchaseItemController)

module.exports = router;