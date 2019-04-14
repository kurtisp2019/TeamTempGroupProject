/**
 * 
 *      shopping-cart.js
 * 
 */

module.exports = function (_sequelize, _Sequelize) {

    var ShoppingCart = _sequelize.define("ShoppingCart", {
        
        storeItemId: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        userId: {
            type: _Sequelize.INTEGER,
            allowNull: true
        }
    });

    ShoppingCart.associate = function (_models) { 

        ShoppingCart.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return ShoppingCart;
}

