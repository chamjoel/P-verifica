var express = require('express');
var app = express();
const path = require('path');

app.get('/api/products',function(req,res){
 res.sendFile(path.join(__dirname,'prodotti.json'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});