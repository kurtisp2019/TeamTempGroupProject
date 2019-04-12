/**
 * 
 *      store-controller.js
 * 
 */

var db = require("../model");

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
/*      function: selectOneByName                                  */
/*                                                                 */
/*      paramaters: _itemName, _callBack                           */
/*                                                                 */
/*      purpose: Select one of the items in the store by its name  */
/*                                                                 */
/*******************************************************************/
function selectOneByName(_itemName, _callBack) {

    db.Store.findAll({
        where: {name: _itemName}
    }).then(function (_data) { 

        _callBack(_data);
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: selectOneById                                    */
/*                                                                 */
/*      paramaters: _Id, _callBack                                 */
/*                                                                 */
/*      purpose: Select one of the items in the store by its id    */
/*                                                                 */
/*******************************************************************/
function selectOneById(_Id, _callBack) {

    db.Store.findAll({
        where: {id: _Id}
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

   
    db.Store.update(_attributeObj, { where: {id: _id}}).then(function (_data) { 

        console.log("update success");
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: deleteItem                                       */
/*                                                                 */
/*      paramaters: _id                                            */
/*                                                                 */
/*      purpose: Delete all the items in the store                 */
/*                                                                 */
/*******************************************************************/
function deleteItem(_id) {
    db.Store.destroy({ where: {id: _id}}).then(function (_data) {
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

