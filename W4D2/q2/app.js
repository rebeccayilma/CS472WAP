const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = ["yes", "ofcourse", "Without a doubt", "never ever", "Yes definitely", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later"];

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/8ball", (req, res) => {

    const index = Math.floor(Math.random() * (list.length - 1));
    res.status(200).send(JSON.stringify(list[index]));
});


app.listen(3000);