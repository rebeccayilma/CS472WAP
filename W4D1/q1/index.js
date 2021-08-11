const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
let urlenc = express.urlencoded({ extended: false });
// app.use(urlenc);
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.get('/',(req,res)=>{
  const cookies = req.cookies;
  res.render('form',{cookies});
});
app.post('/addCookie', urlenc, (res,req)=>{

  const key = req.body;
  console.log('request abd', key);
  // console.log('response abd', res);
  // const value = req.body.value;
  // res.cookie(key,value);
  // res.redirect('back');
})
app.listen(3000);