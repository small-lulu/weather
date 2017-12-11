//天气

var express = require('express');
var app = express();
var fs = require("fs");
var test2=require('./test2');
var test3=require('./test3');
var test4=require('./test4');
var http =  require('http');  
var url = "http://www.weather.com.cn/data/cityinfo/101010100.html";  
var city = require("./cityData");  
var bb= "ssss";
var aa="qq"


app.get('/find', function (req, res) {
 res.header("Access-Control-Allow-Origin", "*");
   // 输出 JSON 格式
   var response = {
       "city":req.query.city,
   };
   console.log(response);
 

var chunk = req.query.city  
        // chunk = chunk.trim();//去掉字符串的前后空格  
        var citycode = city[chunk];  
        console.log(citycode);

        if(typeof (citycode) === "string"){
getCityData("http://www.weather.com.cn/data/cityinfo/" + citycode + ".html"  );  
        }else{
          getCityData("http://www.weather.com.cn/data/cityinfo/101010100.html"  );  
        }

       setTimeout(funcName, 100);
        function funcName() {
          res.send(bb);}
})




app.get('*',function (req, res) {
  var data = fs.readFileSync('input.txt');
  res.header("Access-Control-Allow-Origin", "*");


  var url = "http://www.weather.com.cn/data/cityinfo/101010100.html"
  

  getCityData(url);  
       
       setTimeout(funcName, 100);
        function funcName() {
          res.send(bb);}
  
}


);

function getCityData(url) {  
  
    http.get(url, function (res) {//通过上面传过来的url来获取该天气信息的数据  
        var jsonData = '';  
  
        res.on("data", function (data) {  
            jsonData += data.toString('utf8');//保存天气信息的数据  
            // console.log(jsonData.toString());  

        })  
        res.on("end", function () {  
            jsonData = JSON.parse(jsonData);//因为获取到的天气信息数据是JSON格式的，通过JSON.parse函数进行解析，得到一个对象  
            //输出天气的信息  
            
            console.log(jsonData.weatherinfo);  
              bb=jsonData.weatherinfo
       
        })  
        
    })  

} 

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});