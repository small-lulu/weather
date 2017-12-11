//我的

var express = require('express');
var app = express();
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; 
 

 //登录
app.get('/process_get', function (req, res) {
 res.header("Access-Control-Allow-Origin", "*");
   // 输出 JSON 格式
   var response = {
       "username":req.query.username,
       "password":req.query.password
   };
   
//    console.log(response);

   var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('site');
  //查询数据
  var whereStr = {"username":req.query.username,"password":req.query.password};
  
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

app.get('/zhuce', function (req, res) {
 res.header("Access-Control-Allow-Origin", "*");
   // 输出 JSON 格式
   var response = {
       "username":req.query.username,
       "password":req.query.password,
       "email":req.query.email,
       "phone":req.query.phone,
       "introduction":req.query.introduction,
       "cityname":req.query.cityname,
   };
   console.log(response);

   if(req.query.username&&req.query.password){
       res.end('ok');

    //    data = JSON.parse( response );

    var insertData = function(db, callback) {  
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    var data = {"username":req.query.username,"password":req.query.password,"email":req.query.email,"phone":req.query.phone,"cityname":req.query.cityname,"introduction":req.query.introduction};
    collection.insert(data, function(err, result) { 
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
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});


       
fs.writeFile(__dirname + "/" + "file.json", JSON.stringify(response),  function(err,data) {
  console.log( 'hahaha' );
});


   }else{
   res.end(JSON.stringify(response));
}

})







app.get('/xiugai', function (req, res) {
 res.header("Access-Control-Allow-Origin", "*");
   // 输出 JSON 格式
   var response = {
       "username":req.query.username,
       "password":req.query.password,
       "email":req.query.email,
       "phone":req.query.phone,
       "cityname":req.query.cityname,
       "introduction":req.query.introduction,
   };
//    console.log(response);

   if(req.query.email||req.query.phone||req.query.introduction||req.query.cityname){
       res.end('ok');

    //    data = JSON.parse( response );

var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"username":req.query.username};
    var updateStr = {$set: { "email" : req.query.email,"phone":req.query.phone,"introduction":req.query.introduction,"cityname":req.query.cityname }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
// collection.update({"username":req.query.username},{$set: { "password":req.query.password}}, function(err, result) {
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });


}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    updateData(db, function(result) {
        // console.log(result);
        db.close();
    });
});


   }else{
   res.end(JSON.stringify(response));
}

})













 
var server = app.listen(3002, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})