var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/sample.html');
});

app.get('/main.js', function (req, res) {
    res.sendFile(__dirname + '/main.js');
});

app.get('/callApiClientSdk.min.js', function (req, res) {
    res.sendFile(__dirname + '/callApiClientSdk.min.js');
});

var server = app.listen(5500, function () {
    console.log('Node server is running..');
});