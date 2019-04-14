/**
 * 
 *      shopping-cart.js
 *  
 */

var db = require("../model");

/*******************************************************************/
/*                                                                 */
/*      function: SelectALL                                        */
/*                                                                 */
/*      paramaters: _callBack                                      */
/*                                                                 */
/*      purpose: Select all the items in the shopping cart         */
/*                                                                 */
/*******************************************************************/
function selectAll(_callBack) {
    db.ShoppingCart.findAll().then(function (_data) {

        // TODO: Im not sure this will work because it is async, need the server up to try it!!
        var items = [];
        for (var i = 0; i < _data.length; ++i) {

            // find a store item based on the id in the shopping cart
            db.StoreItem.findAll({ where: { id: _data[i].storeItemId } }).then(function (_data) {
                _callBack(_data);
            });

        }
    });

}


/*******************************************************************/
/*                                                                 */
/*      function: selectOne                                        */
/*                                                                 */
/*      paramaters: _condition, _callBack                          */
/*                                                                 */
/*      purpose: Select one a the shopping cart item by a          */
/*              specified condition ( id: _id, name: _name)        */
/*                                                                 */
/*******************************************************************/
function selectOne(_condition, _callBack) {

    db.ShoppingCart.findAll({
        where: _condition
    }).then(function (_data) {

        // find a store item based on the id in the shopping cart
        db.StoreItem.findAll({ where: {id: _data.storeItemId}}).then(function (_data) {
            _callBack(_data);
        });
    });
}

/**************************************************************************/
/*                                                                        */
/*      function: updateItem                                              */
/*                                                                        */
/*      paramaters: _attributeObj, _id                                    */
/*                                                                        */
/*      purpose: Update an item in the shopping cart by the               */
/*               attributeObj and its id.  attributeObj should            */
/*               contain the properties needed to be updated              */
/*               i.e. attributeObj = {name: "example", cost: 40.23}       */
/*                                                                        */
/**************************************************************************/
function updateItem(_attributeObj, _id) {

   
    db.ShoppingCart.update(_attributeObj, { where: {id: _id}}).then(function (_data) { 

        console.log("update success");
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: deleteItem                                       */
/*                                                                 */
/*      paramaters: _id                                            */
/*                                                                 */
/*      purpose: Delete all the items in the shopping cart         */
/*                                                                 */
/*******************************************************************/
function deleteItem(_id) {
    db.ShoppingCart.destroy({ where: {id: _id}}).then(function (_data) {
        console.log("delete success.");

    });
}


/*******************************************************************/
/*                                                                 */
/*      function: checkOut                                         */
/*                                                                 */
/*      paramaters: _id                                            */
/*                                                                 */
/*      purpose: buy items from the shopping cart                  */
/*                                                                 */
/*******************************************************************/
// TODO: define this function 
function checkOut(_id) {
}

