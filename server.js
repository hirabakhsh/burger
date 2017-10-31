// Requiring packages 

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var handlebars = require("express-handlebars").create(
	{  
    extname         : '.hbs',
    defaultLayout   : 'main',
    layoutsDir      : 'app/views/layouts',
  });

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// set up handlebars
// =============================================================
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'))

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// Static directory
app.use(express.static("app/public"));

// Routes

// require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

