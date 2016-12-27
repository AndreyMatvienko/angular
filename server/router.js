var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index.ejs', {
        title: 'Home page'
    });
});

router.get('*', function (req, res) {
    res.render('404.ejs', {
        title: 'Not Found'
    });
});



module.exports = router;