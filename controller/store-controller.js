/**
 * 
 *      store-controller.js
 * 
 */

var db = require("../model");


/*******************************************************************/
/*                                                                 */
/*      function: addItemToStore                                   */
/*                                                                 */
/*      paramaters: _storeItemObj                                  */
/*                                                                 */
/*      purpose: Add store item.                                   */
/*                                                                 */
/*******************************************************************/
function addItemToStore(_storeItemObj) {

    // get the user Id
    // get the product Id
    db.ShoppingCart.Create({
        name: _storeItemObj.name,
        description: _storeItemObj.description,
        price: _storeItemObj.price,
        quantity: _storeItemObj.quantity
    });
}

/*******************************************************************/
/*                                                                 */
/*      function: SelectALL                                        */
/*                                                                 */
/*      paramaters: _callBack                                      */
/*                                                                 */
/*      purpose: Select all the items in the store                 */
/*                                                                 */
/*******************************************************************/
function selectAll(_callBack) {

    db.Store.findAll().then(function (_data) {

        _callBack(_data);
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: selectOne                                        */
/*                                                                 */
/*      paramaters: _condition, _callBack                          */
/*                                                                 */
/*      purpose: Select one of the items in the store by a         */
/*               specified condition ( id: _id, name: _name)       */
/*                                                                 */
/*******************************************************************/
function selectOne(_condition, _callBack) {

    db.Store.findAll({
        where: _condition
    }).then(function (_data) {

        _callBack(_data);
    });
}

/*************************************************************************/
/*                                                                       */
/*      function: updateItem                                             */
/*                                                                       */
/*      paramaters: _attributeObj, _id                                   */
/*                                                                       */
/*      purpose: Update an item in the stores by the attributeObj        */
/*               and its id.  attributeObj should contain                */
/*               the properties needed to be updated                     */
/*               i.e. attributeObj = {name: "example", cost: 40.23}      */
/*                                                                       */
/*************************************************************************/
function updateItem(_attributeObj, _id) {


    db.Store.update(_attributeObj, { where: { id: _id } }).then(function (_data) {

        console.log("update success");
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: deleteItem                                       */
/*                                                                 */
/*      paramaters: _id                                            */
/*                                                                 */
/*      purpose: Delete an item in the store                       */
/*                                                                 */
/*******************************************************************/
function deleteItem(_id) {
    db.Store.destroy({ where: { id: _id } }).then(function (_data) {
        console.log("delete success.");
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: AddToShoppingCart                                */
/*                                                                 */
/*      paramaters: _id                                            */
/*                                                                 */
/*      purpose: add an item from the store to the shopping cart   */
/*                                                                 */
/*******************************************************************/
// TODO: define this function 
function addToShoppingCart(_id) {
}

