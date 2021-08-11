// their similarity is that they both keep track of or remember user-related data. but they are different in that a cookie is stored on the client and session data is stored on the server.
const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
let list = [];
app.use(session({secret:'secret',}));
app.use(function(req,res){
  if (!req.session.listitems) {
    req.session.listitems=list;
  }
  list = req.session.listitems;
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
 req.session.listitems = list;
  res.render("list");
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'form.html'));
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(302, "/");
});

app.listen(3000);