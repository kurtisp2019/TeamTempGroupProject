var express = require("express");
var express_handlebars = require("express-handlebars");
var express_handlebars_sections = require("express-handlebars-sections");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbr = require("express-handlebars");
app.engine("handlebars", exphbr({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app); // Routes need to be specified. One 'require' per route
require("./routes/api-routes.js")(app); 


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT: ${PORT}`);
    });
});