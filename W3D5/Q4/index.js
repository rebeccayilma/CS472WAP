const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  res.send(`<!DOCTYPE html> <html lang="en"> <head>   <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge">  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title><link rel="stylesheet" href="${hour >= 6 && hour <= 18 ? "/css/day.css" : "/css/night.css"  }"></head><body> <form action="/result" method="post"><label for="name">Name</label><input type="text" name="name"><label for="age">Age</label><input type="text" name="age"><input type="submit" value="SubmitQuery"></form></body></html>`)
});
app.post("/result", (req, res) => {
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});
app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "person";
  }
  if (!age) age = 0;
  res.send(`Welcome ${name}, at this age of ${age}`);
});

app.listen(3000);