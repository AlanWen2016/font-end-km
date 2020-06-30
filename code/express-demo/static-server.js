const express = require("express");
const app = express();
const path = require("path");
// console.log(path.join(__dirname,'/static'))
// app.use(express.static('public',path.join(__dirname,'/static')));
app.use('/static', express.static('public'))  // http://localhost:9001/static/request.html
// app.use(express.static('static'))
// app.use('/public', express.static('static'))

// app.use('/static', express.static(__dirname))

app.listen(9001,(err)=>{
   if(err) throw err;
   console.log('server is listening on port 9001')
})
