//发现

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; 


//同城查询
app.get('/city', function (req, res) {
 res.header("Access-Control-Allow-Origin", "*");
   // 输出 JSON 格式
   var response = {
       "cityname":req.query.cityname,
   };
   
//    console.log(response);

   var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('site');
  //查询数据
  var whereStr = {"cityname":req.query.cityname};
  
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
    console.log(result);

    if(result!=''){
       res.end(JSON.stringify(result))
   }else{
   res.end('err');
}

    db.close();
  });
});

   

});



var server = app.listen(3008, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});