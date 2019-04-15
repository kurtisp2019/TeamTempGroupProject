// Dependencies
// =============================================================

// Requiring our ShoppingCart model
var shoppingCartController = require("../controller/shopping-cart-controller");
// Routes
// =============================================================
module.exports = function(app) {

      // GET route for getting all of the posts
  app.get("/api/ShoppingCarts/", function(req, res) {
   
    shoppingCartController.selectAll(function (_data) {
      console.log("hello");
        console.log(_data[0].dataValues);
    });
    res.status(200).end();
  });

}