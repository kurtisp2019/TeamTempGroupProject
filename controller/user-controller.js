/**
 * 
 *      user-controller.js
 * 
 */

var db = require("../model");

/*******************************************************************/
/*                                                                 */
/*      function: SelectALL                                        */
/*                                                                 */
/*      paramaters: _callBack                                      */
/*                                                                 */
/*      purpose: Select all the users                              */
/*                                                                 */
/*******************************************************************/
function selectAll(_callBack) {

    db.User.findAll().then(function (_data) {

        _callBack(_data);
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: selectOne                                        */
/*                                                                 */
/*      paramaters: _condition, _callBack                          */
/*                                                                 */
/*      purpose: Select one of the users by a  specified           */
/*               condition ( id: _id, name: _name)                 */
/*                                                                 */
/*******************************************************************/
function selectOne(_condition, _callBack) {

    db.User.findAll({
        where: _condition
    }).then(function (_data) {

        _callBack(_data);
    });
}

/*******************************************************************/
/*                                                                 */
/*      function: selectUserShoppingCart                           */
/*                                                                 */
/*      paramaters: _condition, _callBack                          */
/*                                                                 */
/*      purpose: Select one of the users by a  specified           */
/*               condition ( id: _id, name: _name)                 */
/*                                                                 */
/*******************************************************************/
function selectUserShoppingCart(_condition, _callBack) {

    db.User.findAll({ include: [{model: ShoppingCart}]},{
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
/*      purpose: Update a user in the stores by the attributeObj         */
/*               and its id.  attributeObj should contain                */
/*               the properties needed to be updated                     */
/*               i.e. attributeObj = {name: "example", cost: 40.23}      */
/*                                                                       */
/*************************************************************************/
function updateItem(_attributeObj, _id) {


    db.User.update(_attributeObj, { where: { id: _id } }).then(function (_data) {

        console.log("update success");
    });
}


/*******************************************************************/
/*                                                                 */
/*      function: deleteItem                                       */
/*                                                                 */
/*      paramaters: _id                                            */
/*                                                                 */
/*      purpose: Delete a user                                     */
/*                                                                 */
/*******************************************************************/
function deleteItem(_id) {
    db.User.destroy({ where: { id: _id } }).then(function (_data) {
        console.log("delete success.");
    });
}




