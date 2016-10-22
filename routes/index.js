var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {title: 'ChatApp' ,layout: 'partial/shared'});
});

module.exports = router;
