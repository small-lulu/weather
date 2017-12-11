//新闻

var express = require('express');
var app = express();
var http =  require('http');  
var https =  require('https');  
var aa='hah'
var a2='hah'
// var url = "http://www.weather.com.cn/data/cityinfo/101010100.html";  
// var url = "https://way.jd.com/jisuapi/get?channel=头条&num=1&start=0&appkey=7cf6141570b0bd09862a6587d315e6fa";  
// var url = "https://way.jd.com/jisuapi/channel?appkey=7cf6141570b0bd09862a6587d315e6fa";  
var url="https://way.jd.com/jisuapi/get?channel=%e5%a4%b4%e6%9d%a1&num=20&start=0&appkey=7cf6141570b0bd09862a6587d315e6fa";  


app.get('/xwlx', function (req, res) {
 res.header("Access-Control-Allow-Origin", "*");
   // 输出 JSON 格式
   var response = {
       "xwlx":req.query.xwlx
   };
   console.log(response.xwlx);
if(typeof (response.xwlx) === "string"){
url="https://way.jd.com/jisuapi/get?channel="+response.xwlx+"&num=20&start=0&appkey=7cf6141570b0bd09862a6587d315e6fa";  
        }else{
          url="https://way.jd.com/jisuapi/get?channel=%e5%a4%b4%e6%9d%a1&num=20&start=0&appkey=7cf6141570b0bd09862a6587d315e6fa";
        }
    https.get(url, function (res) {//通过上面传过来的url来获取该天气信息的数据  
        var jsonData = '';  
        res.on("data", function (data) {  
            jsonData += data.toString('utf8');//保存天气信息的数据  
            // console.log(jsonData);    
            // console.log('--------------------------');  
        })  
        res.on("end", function () {  
            jsonData = JSON.parse(jsonData);//因为获取到的天气信息数据是JSON格式的，通过JSON.parse函数进行解析，得到一个对象  
           
a2=jsonData.result.result.list
        })  
    })  

   setTimeout(funcName, 100);
      function funcName() {
         res.send(a2);}
  
})


app.get('/xw',function (req, res) {

  res.header("Access-Control-Allow-Origin", "*");

 https.get(url, function (res) {//通过上面传过来的url来获取该天气信息的数据  
        var jsonData = '';  
        res.on("data", function (data) {  
            jsonData += data.toString('utf8');//保存天气信息的数据  
            // console.log(jsonData);    
            // console.log('--------------------------');  
        })  
        res.on("end", function () {  
            jsonData = JSON.parse(jsonData);//因为获取到的天气信息数据是JSON格式的，通过JSON.parse函数进行解析，得到一个对象  
           
a2=jsonData.result.result.list
a4=jsonData.result.result.list[0].time
        })  
    })  

   setTimeout(funcName, 100);
      function funcName() {
         res.send(a2);}
});







var server = app.listen(3005, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});