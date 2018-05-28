var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res) {

    res.send('hi this is shravan');
})

app.get('/contact', function (req, res) {
    res.send('ths is contact page');
});

app.get('/profile/:id', function (req,res) {

    res.send('the requsted id is ::' + req.params.id);
})

app.get('/htmlexp', function (req, res) {
    res.sendFile(__dirname +'/index.html');
})

app.get('/pro/rend', function (req, res) {
    res.render('profile');
})

app.get('/pro/:test', function (req, res) {
    res.render('profile', {person:req.params.test});
})


app.get('/pro1/:json', function (req, res) {
    var data = { age: 29, job: 'shravan' }
    res.render('profile', {person:req.params.json, data: data });
})

app.listen(3000);