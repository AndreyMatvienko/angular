var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Home page');
    res.send('Hello 123!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});