var burger = require("../models/burger.js");

module.exports = function(app) {
  
  app.get('/', function(req, res) {
    burger.all(function(data) {
      res.render("index", {burger: data});
    });

  });

  app.post('/api/1.0/create', function(req, res) {
    burger.create(req.body.burger_item);

  });

  app.put('/api/1.0/update', function(req, res) {
    burger.update(req.body.burger_id);

  });

  app.put('/api/1.0/delete', function(req, res) {
    console.log(req.body.burger_id);
    burger.delete(req.body.burger_id);
  })

  app.get('/mockup', function(req, res) {
    res.render('mockup');
  })

};
