var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Signin = require('./routes/Signin')
var PurchaseItem = require('./routes/PurchaseItem')
var SellItem = require('./routes/SellItem')
var Purchase = require('./routes/Purchase')
var Sell = require('./routes/Sell')
var Transaction = require('./routes/Transaction')




var MOngodb = require("./models/databaseConnection")
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/signin',Signin);
app.use('/purchaseitem',PurchaseItem);
app.use('/sellitem',SellItem);
app.use('/purchase',Purchase);
app.use('/sell',Sell);
app.use('/transaction',Transaction);




app.listen(4000)
var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});