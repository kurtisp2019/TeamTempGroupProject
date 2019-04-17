// Dependencies
// =============================================================

// Requiring our ShoppingCart model
var shoppingCartController = require("../controller/shopping-cart-controller");
var storeController = require("../controller/store-controller");
var express = require("express");

var app = express();
var userController = require("../controller/user-controller");
// Routes
// =============================================================
module.exports = function (app) {

  /*******************************************************************/
  /*              START SHOPPING CART CONTROLLER ROUTES              */
  /*******************************************************************/
  //Select all items in Shopping Cart
  app.get("/api/ShoppingCart/", function (req, res) {

    shoppingCartController.selectAll(function (_data) {
      console.log("MADE IT: api/ShoppingCart/");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Add Shopping Cart Item
  app.post("/api/AddCartItem/", function (req, res) {

    shoppingCartController.addShoppingCartItem(req.body.curUserId, req.body.storeItemId);
    res.status(200).end();
  });

  // Select one item in cart
  app.get("/api/SelectCartItem/", function (req, res) {

    shoppingCartController.selectOne({id: 1}, function (_data) {
      console.log("MADE IT: /api/SelectCartItem/");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Update Item
  app.put("/api/UpdateCartItem/:id", function (req, res) {


    shoppingCartController.updateItem({curUserId: 101011}, req.params.id);
    res.status(200).end();
  });

  // Delete Item
  app.delete("/api/DeleteCartItem/", function (req, res) {

    shoppingCartController.deleteItem(3);
    res.status(200).end();
  });

  /*******************************************************************/
  /*              START STORE CONTROLLER ROUTES                      */
  /*******************************************************************/
  //Store-Controller route (Select All)
  app.get("/api/Store/", function (req, res) {

    storeController.selectAll(function (_data) {
      // console.log("MADE IT: api/Store/");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Add store item
  app.post("/api/AddStoreItem/", function (req, res) {

    storeController.addItemToStore({name: req.body.name, description: req.body.description, price: req.body.price, quantity: req.body.quantity, image: req.body.image});
    res.status(200).end();
  });

  // Select one item in store
  app.get("/api/SelectStoreItem/", function (req, res) {

    storeController.selectOne({id: 1}, function (_data) {
      console.log("MADE IT: /api/SelectStoreItem/");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Update Item
  app.put("/api/UpdateStoreItem/:id", function (req, res) {

    storeController.updateItem({name: "Tennis Ball", description: "Playing Tennis", price: 30, quantity: 50}, req.params.id);
    res.status(200).end();
  });

  // Delete Item
  app.delete("/api/DeleteStoreItem/", function (req, res) {

    storeController.deleteItem(4);
    res.status(200).end();
  });

  /*******************************************************************/
  /*              START USER CONTROLLER ROUTES                      */
  /*******************************************************************/
  // User Controller (Select All)
  app.get("/api/users/", function (req, res) {

    userController.selectAll(function (_data) {
      console.log("MADE IT: /api/users");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Add User
  app.post("/api/AddUser/", function (req, res) {

    userController.addUser({userName: req.body.userName, password: req.body.password});
    res.status(200).end();
  });

  //Select User
  app.get("/api/SelectUser/", function (req, res) {

    userController.selectOne({id: 1},function (_data) {
      console.log("MADE IT: /api/SelectUser");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Select User Shopping Cart
  app.get("/api/SelectUserShoppingCart/", function (req, res) {

    userController.selectUserShoppingCart(function (_data) {
      console.log("MADE IT: /api/SelectUserShoppingCart");
      console.log(_data);
    });
    res.status(200).end();
  });

  //Update User
  app.put("/api/UpdateUser/:id", function (req, res) {

    userController.updateItem({userName: "Chad", password: "abcd"}, req.params.id);
    res.status(200).end();
  });

  //Delete User
  app.delete("/api/DeleteUser/", function (req, res) {

    userController.deleteItem(1);
    res.status(200).end();
  });
}