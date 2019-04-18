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
            res.render("index.handlebars", { items1: [_data[_data.length-1], _data[_data.length-2], _data[_data.length-3], _data[_data.length-4], _data[_data.length-5], _data[_data.length-6], _data[_data.length-7], _data[_data.length-8]], items2: [_data[_data.length-9], _data[_data.length-10], _data[_data.length-11], _data[_data.length-12], _data[_data.length-13], _data[_data.length-14], _data[_data.length-15], _data[_data.length-16]] });
         });
    });

<<<<<<< HEAD
    app.get("/test", function (_req, _res) {
        
        _res.render("test.handlebars");
    });
    
    app.get("/accountpage", function (req, res) {
        res.render("login.handlebars");
=======
    app.get("/index.handlebars", function (req, res) {
       
        // render the home page plus the data
        storeController.selectAll(function (_data) { 
           // console.log(_data);
            res.render("index.handlebars", { items1: [_data[_data.length-1], _data[_data.length-2], _data[_data.length-3], _data[_data.length-4], _data[_data.length-5], _data[_data.length-6], _data[_data.length-7], _data[_data.length-8]], items2: [_data[_data.length-9], _data[_data.length-10], _data[_data.length-11], _data[_data.length-12], _data[_data.length-13], _data[_data.length-14], _data[_data.length-15], _data[_data.length-16]] });
         });
>>>>>>> 460507c115c11dd9ab03e0a5b9c28c8b89f75480
    });

    app.get("/confirmation.handlebars", function (req, res) {
        res.render("confirmation.handlebars");
    });

    app.get("/contact.handlebars", function (req, res) {
        res.render("contact.handlebars");
    });

    app.get("/login.handlebars", function (req, res) {
        res.render("login.handlebars");
    });

    app.get("/checkout.handlebars", function (req, res) {
        res.render("checkout.handlebars");
    });

    app.get("/cart.handlebars", function (req, res) {
        res.render("cart.handlebars");
    });

    app.get("/items.handlebars", function (req, res) {
        res.render("items.handlebars");
    });

    app.get("/home.handlebars", function (req, res) {
        storeController.selectAll(function (_data) {
            res.render("home.handlebars", { items: _data});
        });
    });

    // app.get("/shoppingcart", function (req, res) {

    //      // get data for the home page
         
    //      shoppingCartController.selectAll(function (_data) { 
    //         res.render("shoppingcart.handlebars", _data);
    //      });
         
        
    // });

};