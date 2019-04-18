var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbr = require("express-handlebars");
var express_handlebars_sections = require('express-handlebars-sections');
<<<<<<< HEAD
//app.engine("handlebars", exphbr({ defaultLayout: "main" }));
app.engine('handlebars', exphbr({
    defaultLayout: "main",
    section: express_handlebars_sections(),  // CONFIGURE 'express_handlebars_sections'
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
=======
app.engine('handlebars', exphbr({
    defaultLayout: "main",
    section: express_handlebars_sections(),  // CONFIGURE 'express_handlebars_sections'
    helpers:{
        section:function(name, options){
            if(!this._sections){this._sections = {}};
>>>>>>> 460507c115c11dd9ab03e0a5b9c28c8b89f75480
            this._sections[name] = options.fn(this);
            return null;
        }
    }
 
    // properties used by express-handlebars configuration ...
}));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app); // Routes need to be specified. One 'require' per route
require("./routes/api-routes.js")(app); 


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT: ${PORT}`);
    });
});