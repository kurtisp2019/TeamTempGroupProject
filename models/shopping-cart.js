/**
 * 
 *      shopping-cart.js
 * 
 */
module.exports = function (_sequelize, _Sequelize) {

    var ShoppingCart = _sequelize.define("ShoppingCart", {

        storeItemId: {
            type: _Sequelize.INTEGER,
            allowNull: true
        },
        curUserId: {
            type: _Sequelize.INTEGER,
            allowNull: false

        }
    }, {
        timestamps: false});
<<<<<<< HEAD
=======

    // ShoppingCart.associate = function (_models) {

    //     ShoppingCart.belongsTo(_models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }
>>>>>>> 6cbbb20c920d3cea7d27f82664a38ce45fc585eb

    return ShoppingCart;
}

