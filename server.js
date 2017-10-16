const express = require('express');
const dns = require('dns');

const app = express();

app.get('/', (req,res)=>{

  let obj = {
    ipaddress: req.headers['x-forwarded-for']? req.headers['x-forwarded-for'].split(',')[0]: req.ip,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split('(')[1].split(')')[0]
  };

  res.end(JSON.stringify(obj));

});

let listener = app.listen(process.env.PORT,()=>{
  console.log(`running on ${listener.address().port}`);
});
