const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
res.send('<form action="/result" method="post"><label for="name">Name</label><input type="text" name="name"><label for="age">Age</label><input type="text" name="age"><input type="submit" value="SubmitQuery"></form>')
});
app.post('/result',(req,res)=>{
  let name = req.body.name;
 let age = req.body.age;
res.send(`Welcome ${name} Age ${age}`);
});
app.listen(3000);