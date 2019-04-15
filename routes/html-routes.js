// Dependencies
var path = require("path");

//Routes
module.exports = function (app) {

    // Each of the below routes just handles the handlebars page that the user gets sent to.

    // index route loads view.handlebars
    app.get("/", function (req, res) {
        res.render("home.handlebars");
    });

    app.get("/accountpage", function (req, res) {
        res.render("accountpage.handlebars");
    });

    app.get("/addproduct", function (req, res) {
        res.render("addproduct.handlebars");
    });

    app.get("/login", function (req, res) {
        res.render("login.handlebars");
    });

    app.get("/register", function (req, res) {
        res.render("register.handlebars");
    });

    app.get("/checkout", function (req, res) {
        res.render("checkout.handlebars");
    });

    app.get("/shoppingcart", function (req, res) {
        res.render("shoppingcart.handlebars");
    });

};