const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.get('/',(req,res)=>{
  const cookies = req.cookies;
  res.render('form',{cookies});
});
app.post('/addCookie',(res,req)=>{
  const key = req.body.key;
  console.log('request abd', req);
  console.log('response abd', res);
  const value = req.body.value;
  res.cookie(key,value);
  res.redirect('back');
})
app.listen(3000);