var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('file.json', '1111',  function(err) {
   if (err) {
       return console.error(err);
   }
  console.log( 'hahaha' );
});