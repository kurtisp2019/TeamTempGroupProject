// Dependencies
// =============================================================

// Requiring our ShoppingCart model
var db = require("../controller");

// Routes
// =============================================================
module.exports = function(app) {

      // GET route for getting all of the posts
  app.get("/api/ShoppingCarts/", function(req, res) {
   
    db.shoppingCartController.selectAll(function(_data){
        console.log(_data);
        res.status(200).end();
    });
  });

}