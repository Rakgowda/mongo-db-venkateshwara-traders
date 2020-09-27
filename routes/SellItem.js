var express = require('express');
var router = express.Router();
var {SellItemController,SellItemUpdateController,SellItemCreateController,
    SellItemDeleteController} = require('../controllers/SellItemList')
/* GET users listing. */
router.get('/',SellItemController)
router.post('/Update',SellItemUpdateController)
router.post('/Create',SellItemCreateController)
router.post('/Delete',SellItemDeleteController)


module.exports = router;