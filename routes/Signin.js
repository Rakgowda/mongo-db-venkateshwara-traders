var express = require('express');
var router = express.Router();
var {Sinin} = require('../controllers/Signin')
/* GET users listing. */
router.get('/',Sinin)

module.exports = router;