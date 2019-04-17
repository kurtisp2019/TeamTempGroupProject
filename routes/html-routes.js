// Dependencies
var path = require("path");

var shoppingCartController = require("../controller/shopping-cart-controller");
var storeController = require("../controller/store-controller");
var userController = require("../controller/user-controller");

//Routes
module.exports = function (app) {

    // Each of the below routes just handles the handlebars page that the user gets sent to.

    // index route loads view.handlebars
    app.get("/", function (req, res) {
       
        // render the home page plus the data
        storeController.selectAll(function (_data) { 
           // console.log(_data);
            res.render("index.handlebars", { items1: [_data[0], _data[1], _data[2], _data[3], _data[4], _data[5], _data[6], _data[7]], items2: [_data[8], _data[9], _data[10], _data[11], _data[12], _data[13], _data[14], _data[15]] });
         });
    });

    app.get("/accountpage", function (req, res) {
        res.render("login.handlebars");
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

         // get data for the home page
         
         shoppingCartController.selectAll(function (_data) { 
            res.render("shoppingcart.handlebars", _data);
         });
         
        
    });

};