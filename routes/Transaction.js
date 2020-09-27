var express = require('express');
var router = express.Router();
var {TransactionController} = require('../controllers/Transaction')
/* GET users listing. */
router.post('/',TransactionController)

module.exports = router;