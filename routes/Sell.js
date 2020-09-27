var express = require('express');
var router = express.Router();
var {SellController} = require('../controllers/Sell')
/* GET users listing. */
router.post('/',SellController)

module.exports = router;    