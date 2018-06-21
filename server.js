const express = require('express');
const fs = require('fs');
var example = require('./routes/example')
var app = express();

app.use( (req,res,next)=>{
  var now = new Date().toString();
  var log = `Request made @ ${now} : ${req.method}: ${req.url}`;
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log('Error while writing to server.log file');
    }
  });
  console.log(log);
  next();
});

app.use('/example', example)

app.listen(3000,()=>{
  console.log(" Server is up on 3000 port");
});
