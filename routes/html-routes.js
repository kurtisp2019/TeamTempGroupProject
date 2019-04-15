// Dependencies
var path = require("path");

//Routes
module.exports = function (app) {

    // Each of the below routes just handles the handlebars page that the user gets sent to.

    // index route loads view.handlebars
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/home.handlebars"));
    });

    app.get("/accountpage", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/accountpage.handlebars"));
    });

    app.get("/addproduct", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/addproduct.handlebars"));
    });

    app.get("/login", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    });

    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/register.handlebars"));
    });

    app.get("/checkout", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/checkout.handlebars"));
    });

    app.get("/shoppingcart", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/shoppingcart.handlebars"));
    });

};