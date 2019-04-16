// Dependencies
// =============================================================

// Requiring our ShoppingCart model
var shoppingCartController = require("../controller/shopping-cart-controller");
var storeController = require("../controller/store-controller");
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
  app.get("/api/AddCartItem/", function (req, res) {

    shoppingCartController.addShoppingCartItem(function (_data) {
      console.log("MADE IT: /api/AddCartItem/");
      console.log(_data);
    });
    res.status(200).end();
  });
  // Select one item in cart
  app.get("/api/SelectCartItem/", function (req, res) {

    shoppingCartController.selectOne(function (_data) {
      console.log("MADE IT: /api/SelectCartItem/");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Update Item
  app.get("/api/UpdateCartItem/", function (req, res) {

    shoppingCartController.updateItem(function (_data) {
      console.log("MADE IT: api/UpdateCartItem/");
      console.log(_data);
    });
    res.status(200).end();
  });
  // Delete Item
  app.get("/api/DeleteCartItem/", function (req, res) {

    shoppingCartController.deleteItem(function (_data) {
      console.log("MADE IT: /api/DeleteCartItem/");
      console.log(_data);
    });
    res.status(200).end();
  });

  /*******************************************************************/
  /*              START STORE CONTROLLER ROUTES                      */
  /*******************************************************************/
  //Store-Controller route (Select All)
  app.get("/api/Store/", function (req, res) {

    storeController.selectAll(function (_data) {
      console.log("MADE IT: api/Store/");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Add store item
  app.get("/api/AddStoreItem/", function (req, res) {

    storeController.addItemToStore(function (_data) {
      console.log("MADE IT: api/AddStoreItem/");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Select Store Item
  app.get("/api/SelectStoreItem/", function (req, res) {

    storeController.selectOne(function (_data) {
      console.log("MADE IT: api/SelectStoreItem/");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Update Store Item
  app.get("/api/UpdateStoreItem/", function (req, res) {

    storeController.updateItem(function (_data) {
      console.log("MADE IT: api/UpdateStoreItem/");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Delete Store Item
  app.get("/api/DeleteStoreItem/", function (req, res) {

    storeController.deleteItem(function (_data) {
      console.log("MADE IT: api/DeleteStoreItem/");
      console.log(_data);
    });
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
  app.get("/api/AddUser/", function (req, res) {

    userController.addUser(function (_data) {
      console.log("MADE IT: /api/AddUser");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Select User
  app.get("/api/SelectUser/", function (req, res) {

    userController.selectOne(function (_data) {
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
  app.get("/api/UpdateUser/", function (req, res) {

    userController.updateItem(function (_data) {
      console.log("MADE IT: /api/UpdateUser");
      console.log(_data);
    });
    res.status(200).end();
  });
  //Delete User
  app.get("/api/DeleteUser/", function (req, res) {

    userController.deleteItem(function (_data) {
      console.log("MADE IT: /api/DeleteUser");
      console.log(_data);
    });
    res.status(200).end();
  }); 
}