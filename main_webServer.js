const myPowers = require('./common/util/math/myPower');
var express = require('express');
var path = require('path');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express' },
    };
    res.render('pages/home', data2template);
});

// set square route
app.get('/square', function(req, res) {
    let input = 2;
    var data2template = {
        head: { title: 'Square page' },
        inpNumber: input,
        resultNumber: myPowers.toSquare(input)
    };
    res.render('pages/square', data2template);
});

app.get('/cube', function(req, res) {
    let input = 3;
    var data2template = {
        head: { title: 'Cube page' },
        inpNumber: input,
        resultNumber: myPowers.toCube(input)
    };
    res.render('pages/cube', data2template);
});

app.get('/about', function(req, res) {
    res.status(200).render('pages/about.html');
});

app.get('/*', function(req, res) {
    var data2template = {
        head: { title: 'Error page' }
    };
    res.status(404).render('pages/error', data2template);
});



app.listen(8081);
console.log("Listening on port 8081");