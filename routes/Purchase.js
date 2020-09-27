var express = require('express');
var router = express.Router();
var {PurchaseController} = require('../controllers/Purchase')
/* GET users listing. */
router.post('/',PurchaseController)

module.exports = router;