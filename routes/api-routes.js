// Dependencies
// =============================================================

// Requiring our ShoppingCart model
var shoppingCartController = require("../controller/shopping-cart-controller");
var storeController = require("../controller/store-controller");
// Routes
// =============================================================
module.exports = function(app) {

      // GET route for getting all of the posts
  app.get("/api/ShoppingCarts/", function(req, res) {
   
    shoppingCartController.selectAll(function (_data) {
      console.log("hello");
        console.log(_data);
        
    });
    res.status(200).end();
  });

}

app.get("/", function(req, res) {

  storeController.selectAll(function (_data) {
    res.render("home.handlebars", { items: _data });

  });
});