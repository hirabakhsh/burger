var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(request, response) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render('index', hbsObject);
    });
});

router.post('/burgers', function(request, response) {
    burger.insert(request.body.type, function() {
        response.redirect('/');
    });
});

router.post('/burgers/:id', function(request, response) {
    burger.update(request.params.id, function() {
        response.redirect('/');
    });
});


module.exports = router;