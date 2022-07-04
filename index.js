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

var qs = require("qs");

const port =  process.env.PORT || 5500;

const publicIp = process.env.PUBLIC_URL;

var server = app.listen(port, () => {
  console.log(`Node server is running at http://localhost:${port}`);
});

